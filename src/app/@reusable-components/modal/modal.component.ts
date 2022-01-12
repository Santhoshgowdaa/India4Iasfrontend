import {
  Component,
  OnInit,
  ViewChild,
  TemplateRef,
  Input,
} from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'modal-component',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent implements OnInit {
  /* -------------------------------------------------------------------
   Global variables
  ----------------------------------------------------------------------*/
  @ViewChild('modal1') private modalContent: TemplateRef<ModalComponent>;
  private modalRef: NgbModalRef;
  @Input() headerBgColor;
  @Input() buttonColor;

  /* -------------------------------------------------------------------
   Constructor
  ----------------------------------------------------------------------*/
  constructor(public modalService: NgbModal) { }

  @Input() caseData;

  /* -------------------------------------------------------------------
   NgOnInit
  ----------------------------------------------------------------------*/
  ngOnInit(): void { }

  /* -------------------------------------------------------------------
   This method to open modal
  ----------------------------------------------------------------------*/
  open(size?: string, windowClass?: string, data?: any) {
    this.modalRef = this.modalService.open(this.modalContent, {
      centered: true,
      size: size,
      windowClass: windowClass,
    });
  }

  /* -------------------------------------------------------------------
   This method to close modal
  ----------------------------------------------------------------------*/
  close() {
    this.modalRef.close();
  }

  getCaseData() {
    return this.caseData;
  }
}
