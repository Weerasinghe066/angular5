import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-pdf-viewer',
  template: `
    <div class="pdf-container" *ngIf="showPdf">
      <pdf-viewer
        [src]="pdfSrc"
        [render-text]="true"
        [original-size]="false"
        [stick-to-page]="true"
        style="width: 100%; height: 100vh"
      ></pdf-viewer>
    </div>
    <button (click)="viewPdf()" *ngIf="!showPdf">View PDF</button>
  `,
  styles: [
    `
    .pdf-container {
     
      overflow: hidden;
    }
    `
  ]
})
export class PdfViewerComponent {
  
  // pdfSrc = 'https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf'; 
  pdfSrc = 'assets/sample.pdf'; 
 
  showPdf = false;

  viewPdf() {
    this.showPdf = true;
  }

  @HostListener('contextmenu', ['$event'])
  onContextMenu(event: MouseEvent) {
    event.preventDefault();
  }
}
