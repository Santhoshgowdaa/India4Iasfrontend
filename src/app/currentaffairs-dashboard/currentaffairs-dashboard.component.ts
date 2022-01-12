import { Component, OnInit, Input, ViewChild, HostListener } from '@angular/core';
import { IMyDpOptions } from 'mydatepicker';
import { Router } from '@angular/router';
import { DashboardService } from '../@core/http/dashboard.service';
import InlineEditor from '@ckeditor/ckeditor5-build-inline';
import { ModalComponent } from '../@reusable-components/modal/modal.component';

export class UploadAdapter {
  private loader;
  constructor(loader) {
    this.loader = loader;
  }

  upload() {
    return this.loader.file
      .then(file => new Promise((resolve, reject) => {
        var myReader = new FileReader();
        myReader.onloadend = (e) => {
          resolve({ default: myReader.result });
        }

        myReader.readAsDataURL(file);
      }));
  };
}

@Component({
  selector: 'app-currentaffairs-dashboard',
  templateUrl: './currentaffairs-dashboard.component.html',
  styleUrls: ['./currentaffairs-dashboard.component.css']
})
export class CurrentaffairsDashboardComponent implements OnInit {
  public myDatePickerOptions: IMyDpOptions = {
    // other options...
    dateFormat: 'yyyy-mm-dd',
    showTodayBtn: true,
    allowDeselectDate: true,
    height: '45px',
  };

  // Initialized to specific date (09.10.2018).
  date: any;
  successMsg: string
  content = '';
  catogories = [];
  id: number;
  tag: string;
  desc: string;
  catogoryType: string;
  pageData = {
    page: 1,
    pageSize: 10,
    collectionSize: 0,
  }
  showPagination = false;
  currentAffairsDetails = [];
  count: number;
  time: string;
  editor = InlineEditor;
  data: any = `<p>Hello, world!</p>`;
  enableCurrentaffairs: boolean;
  popOverContent: any;
  editable: boolean;
  enableUpdate: boolean;
  currentAffairsId: any;
  changeDate: boolean;
  currentAffairsDate: string;
  @ViewChild('deleteCA') public modalComponent: ModalComponent;
  @ViewChild('confrimDelete') public modalComponent1: ModalComponent;
  selected: boolean;

  constructor(
    private router: Router, private dashboardService: DashboardService
  ) { }

  ngOnInit(): void {
    this.editable = false;
    this.enableCurrentaffairs = false;
    this.content = '';
    this.tag = '';
    this.desc = '';
    this.catogoryType = '';
    this.id = parseInt(sessionStorage.getItem('id'));
    this.getCatogoryType();
    this.getAllCurrentAffairs();
  }

  onDateChanged(event) {
    this.changeDate = true;
    this.date = event.formatted;
  }

  redirect_login() {
    this.router.navigateByUrl('');
  }

  getCatogoryType() {
    this.dashboardService.getCategoryType().subscribe(res => {
      this.catogories = res.data;
    })
  }

  createCurrentAffairs() {
    var time = new Date();
    this.time = time.getHours() + ':' + time.getMinutes() + ':' + time.getSeconds()
    this.dashboardService.createCurrentAffairs({
      description: this.desc,
      content: this.content,
      tags: this.tag,
      categoryType: this.catogoryType,
      userId: this.id,
      currentAffairsDate: this.date.formatted + ' ' + this.time
    }).subscribe(res => {
      if (res) {
        this.successMsg = 'Current Affairs Has Been Added Successfully';
        this.modalComponent1.open('sm');
        this.desc = '';
        this.content = '';
        this.tag = '';
        this.catogoryType = '';
        this.date = '';
        setTimeout(() => {
          this.modalComponent1.close();
          this.successMsg = '';
        }, 1500)
        this.getAllCurrentAffairs();
      }
    })
  }

  getAllCurrentAffairs() {
    this.dashboardService.getAllCurrentAffairs().subscribe(resData => {
      this.currentAffairsDetails = resData.data;
      this.count = this.currentAffairsDetails.length;
      this.currentAffairsDetails.forEach(data => {
        if (data.currentAffairsDate) {
          data.date = data.currentAffairsDate.substring(0, 10);
          data.time = data.currentAffairsDate.substring(11, 19);
        }
      })
      if (this.count > this.pageData.pageSize) {
        this.showPagination = true
        this.pageData.collectionSize = this.count
      }
      else {
        this.showPagination = false
      }
    })
  }

  onReady(eventData) {
    eventData.plugins.get('FileRepository').createUploadAdapter = function (loader) {
      return new UploadAdapter(loader);
    };
  }


  redirectToCurrentAffairsDashboard() {
    this.enableCurrentaffairs = true;
    this.selected = false;
    this.desc = '';
    this.content = '';
    this.tag = '';
    this.catogoryType = '';
    this.date = '';
    this.enableUpdate = false;
  }

  redirectToDailyQuiz() {
    this.enableCurrentaffairs = false;
  }

  dashboard() {
    this.selected = true;
    this.enableCurrentaffairs = false;
  }

  cancel() {
    this.enableCurrentaffairs = false;
  }

  onShown(data) {
    this.popOverContent = data;
  }

  editData() {
    this.gotoTop();
    this.dashboardService.getCurrentAffairsById(this.popOverContent.id).subscribe(res => {
      this.desc = res.data.description;
      this.tag = res.data.tags;
      this.catogoryType = res.data.categoryType;
      this.content = res.data.content;
      this.currentAffairsId = res.data.id;
      if (res.data.currentAffairsDate) {
        this.date = {
          date: {
            year: parseInt(res.data.currentAffairsDate.substring(0, 4)),
            month: parseInt(res.data.currentAffairsDate.substring(5, 7)),
            day: parseInt(res.data.currentAffairsDate.substring(8, 10))
          }
        };
      }
    });
    this.enableUpdate = true;
  }

  deleteData() {
    this.dashboardService.deleteCurrentAffairs({
      "currentAffairsIds": [this.popOverContent.id]
    }).subscribe(res => {
      if (res.status == 200) {
        this.modalComponent.close();
        this.getAllCurrentAffairs();
        this.successMsg = ' Data Has Been Deleted Successfully';
        this.modalComponent1.open('sm');
        setTimeout(() => {
          this.modalComponent1.close();
          this.successMsg = '';
        }, 1500)
      }
    })
  }

  updateCurrentAffairs() {
    if (this.changeDate) {
      var time = new Date();
      this.time = time.getHours() + ':' + time.getMinutes() + ':' + time.getSeconds()
      this.currentAffairsDate = this.date.formatted + ' ' + this.time;
    } else {
      this.currentAffairsDate = this.popOverContent.date + ' ' + this.popOverContent.time
    }
    this.dashboardService.updateCurrentAffairs({
      id: this.currentAffairsId,
      description: this.desc,
      content: this.content,
      tags: this.tag,
      categoryType: this.catogoryType,
      userId: 1,
      currentAffairsDate: this.currentAffairsDate
    }).subscribe(response => {
      if (response.status == 200) {
        this.successMsg = 'Current Affairs Has Been Updated successfully'
        this.modalComponent1.open('sm');
        this.enableUpdate = false;
        this.desc = '';
        this.content = '';
        this.tag = '';
        this.catogoryType = '';
        this.date = '';
        setTimeout(() => {
          this.modalComponent1.close();
          this.successMsg = '';
        }, 1500)
        this.getAllCurrentAffairs();
      }
    })
  }

  opendeleteModel() {
    this.modalComponent.open('md');
  }

  // TODO: Cross browsing
  gotoTop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }


}
