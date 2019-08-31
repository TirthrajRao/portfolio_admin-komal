import { Component, OnInit } from '@angular/core';
import { ChangeEvent } from '@ckeditor/ckeditor5-angular/ckeditor.component';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as ClassicEditorBuild from '@ckeditor/ckeditor5-build-classic';
import { AdminService } from '../admin.service';
import * as _ from 'lodash';
declare var $: any;
declare var Bloodhound: any;


@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent implements OnInit {
  addProjectForm: FormGroup;
  addTechnologyForm: FormGroup;
  public Editor = ClassicEditorBuild;
  public model = {
    productsData: '',
    servicesData: '',
    featuresData: ''
  };
  file: any = [];
  allCategory: any = [];
  allTechnology: any = [];
  isValidColor: boolean = false;
  colorCode: any = [];
  colorCodeValue: String = '';
  projectId;
  singleProject: any = [];
  hashtag: any = [];
  allTag: any = [];
  constructor(public _adminService: AdminService, public router: Router, public route: ActivatedRoute) {
    this.getAllTags();
    this.route.params.subscribe(params => {
      this.projectId = params.id;
      if (this.projectId) {
        this.getProjectById(this.projectId);
      }
    });

    this.addProjectForm = new FormGroup({
      title: new FormControl('', [Validators.required]),
      desc: new FormControl('', [Validators.required]),
      category: new FormControl('', [Validators.required]),
      technology: new FormControl('', [Validators.required]),
      colorPalette: new FormControl('', [Validators.required]),
      fontFamily: new FormControl('', [Validators.required]),
      products: new FormControl('', [Validators.required]),
      services: new FormControl('', [Validators.required]),
      features: new FormControl('', [Validators.required]),
      images: new FormControl(''),
      hashtag: new FormControl('')
    });

    this.addTechnologyForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      desc: new FormControl('')
    })
  }

  ngOnInit() {
    // $('#multiple-checkboxes').multiselect({
    //   includeSelectAllOption: true,
    // });
    // $('#multiple-checkboxes').multiselect({
    //   templates: {
    //     li: '<li><a href="javascript:void(0);"><label class="pl-2"></label></a></li>'
    //   }
    // });
    // 
    console.log('this.allTag', this.allTag)
    var tags = new Bloodhound({
      datumTokenizer: Bloodhound.tokenizers.whitespace,
      queryTokenizer: Bloodhound.tokenizers.whitespace,
      prefetch: {
        url: this.allTag,
      }
    });
    console.log('this.allTag', this.allTag)
    tags.initialize();

    $('#hashtag').tagsinput({
      typeaheadjs: {
        name: 'tags',
        source: tags
      }
    });

    if (this.router.url.includes('edit')) {
      this.addProjectForm.disable();
    }
    this.getAllCategory();
    this.getAllTechnology();

  }

  getAllTags() {
    this._adminService.getAllTag().subscribe((res: any) => {
      console.log(res);
      _.forEach(res.data, (tag => {
        this.allTag.push(tag.hashtag);
      }))
      console.log(this.allTag)
    }, err => {
      console.log(err);
    })
  }
  projectTech: any = [];
  getProjectById(projectId) {
    console.log(projectId);
    this._adminService.getProjectById(projectId).subscribe((res: any) => {
      console.log("single project============>", res);
      this.singleProject = res.data;
      this.model = {
        productsData: res.data.products,
        servicesData: res.data.services,
        featuresData: res.data.features
      };
      this.colorCode = res.data.colorPalette;
      _.forEach(this.singleProject.technology, tech => {
        this.projectTech.push(tech._id);
      });
      this.addProjectForm.controls.technology.setValue(this.projectTech);
      console.log('this.singleProject==========>', this.singleProject)
    }, err => {
      console.log(err);
    })
  }

  validColor(form) {
    const colorregx = '^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$'
    if (!form.colorPalette.match(colorregx)) {
      this.isValidColor = false;
    } else {
      this.isValidColor = true;
    }
  }
  addColor(form) {
    console.log("==========", form.colorPalette);
    this.colorCode.push(form.colorPalette);
    console.log('this.colorCode=========>', this.colorCode)
    $(".Additem").text(($(".Additem").text() + ', ' + form.colorPalette).replace(/^, /, ''));
    $('#inputId').val('');
    this.isValidColor = false;

  }
  removeColor(index) {
    console.log('index========', index);
    this.colorCode.splice(index, 1);
    console.log("remove clor code=======>", this.colorCode)
  }

  public onReadyproducts(editor) {
    editor.ui.getEditableElement().parentElement.insertBefore(
      editor.ui.view.toolbar.element,
      editor.ui.getEditableElement()
    );
  }
  public onReadyservices(editor) {
    editor.ui.getEditableElement().parentElement.insertBefore(
      editor.ui.view.toolbar.element,
      editor.ui.getEditableElement()
    );
  }
  public onReadyfeatures(editor) {
    editor.ui.getEditableElement().parentElement.insertBefore(
      editor.ui.view.toolbar.element,
      editor.ui.getEditableElement()
    );
  }

  public onChangeproducts({ editor }: ChangeEvent) {
    const data = editor.getData();
    console.log(data)
    // this.comment = data.replace(/<\/?[^>]+(>|$)/g, "");
    this.addProjectForm.controls.products.setValue(data);
  }
  public onChangeservices({ editor }: ChangeEvent) {
    const data = editor.getData();
    console.log(data)
    // this.comment = data.replace(/<\/?[^>]+(>|$)/g, "");
    this.addProjectForm.controls.services.setValue(data);
  }
  public onChangefeatures({ editor }: ChangeEvent) {
    const data = editor.getData();
    console.log(data)
    // this.comment = data.replace(/<\/?[^>]+(>|$)/g, "");
    this.addProjectForm.controls.features.setValue(data);
  }

  bannerSelected(event) {
    this.file = event.target.files;
    console.log(this.file)
  }
  resetForm() {
    this.addProjectForm.reset();
    this.model.productsData = '';
    this.model.servicesData = '';
    this.model.featuresData = '';
  }
  addTechnolgy() {
    console.log("==========>==========")
  }

  getAllCategory() {
    this._adminService.getAllCategory().subscribe((res: any) => {
      console.log('res of all category=========>', res)
      this.allCategory = res.data;
      console.log("=====All category======>", this.allCategory);
    }, err => {
      console.error(err);
    })
  }

  getAllTechnology() {
    this._adminService.getAllTechnology().subscribe((res: any) => {
      console.log('res of all Technology=========>', res)
      this.allTechnology = res.data;
      console.log("=====All Technology======>", this.allTechnology);
    }, err => {
      console.error(err);
    })
  }
  addProject(form) {
    console.log('data of form==================>', form);
    const val = $("#hashtag").tagsinput('items');
    console.log('val==========>', val)
    this.addProjectForm.controls.colorPalette.setValue(this.colorCode);
    this.addProjectForm.controls.hashtag.setValue(val);
    console.log("============", this.addProjectForm.value)
    const data = new FormData();
    _.forOwn(this.addProjectForm.value, (value, key) => {
      data.append(key, value);
    });
    if (this.file.length > 0) {
      for (let i = 0; i <= this.file.length; i++) {
        data.append('uploadFile', this.file[i]);
      }
    }
    console.log('data======================>', data);
    this._adminService.addProject(data).subscribe((res: any) => {
      console.log('res of add project=========>', res);
      this.resetForm()
    }, err => {
      console.error(err);
    })
  }

  addTechnology(data) {
    console.log('data value================>', data);
    this._adminService.addTechnology(data).subscribe((res: any) => {
      console.log("add technology=========>", res);
      $('#modaladdTechnologyForm').modal('hide');
      this.getAllTechnology();
    }, err => {
      console.log(err)
    })
  }
  // *ngIf="singleProject.category" [(ngModel)]="singleProject.category._id"
  updateProject(form) {
    console.log('data of form==================>', form);
    const val = $("#hashtag").tagsinput('items');
    console.log('val==========>', val)
    this.addProjectForm.controls.colorPalette.setValue(this.colorCode);
    this.addProjectForm.controls.hashtag.setValue(val);
    console.log("============", this.addProjectForm.value)
    const data = new FormData();
    _.forOwn(this.addProjectForm.value, (value, key) => {
      data.append(key, value);
    });
    if (this.file.length > 0) {
      for (let i = 0; i <= this.file.length; i++) {
        data.append('uploadFile', this.file[i]);
      }
    }
    console.log('data==in update====================>', data);
    this._adminService.updateProject(data, this.projectId).subscribe((res: any) => {
      console.log('res of add project=========>', res);
      this.addProjectForm.reset()
    }, err => {
      console.error(err);
    })
  }
}
