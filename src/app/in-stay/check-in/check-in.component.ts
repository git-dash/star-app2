import { Component, OnInit } from '@angular/core';
import { CheckInService } from '../../shared/shared-services/check-in.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-check-in',
  templateUrl: './check-in.component.html',
  styleUrls: ['./check-in.component.css']
})
export class CheckInComponent implements OnInit {
  inputMode = 'textMode';

  dataurl = null;
  elementType = 'url';
  scanKey: string = null;
  key: string = null;
  data: any = {
  };
  isKeyValid: boolean = null;
  constructor(private checkInService: CheckInService, private router: Router) { }


  ngOnInit() {
    // this.data.roomKey
    this.key =
      // '-LACLIdDspNmBgQMRMXH';
      '-L6_vPTHL5VX7yOjhGPJ';
  }

  render(e) {
    this.scanKey = e.result;
    console.log(e.result);

  }



  onChange(event) {
    this.elementType = 'dataurl';
    const files = event.srcElement.files;
    console.log(files);
    const fi = new FileReader();

    fi.onload =
      (e) => {
        this.dataurl = fi.result;
      };


    if (files.length !== 0) {
      // reset key
      this.scanKey = null;
      fi.readAsDataURL(files[0]);
    }
  }


  // enableCheckIn(): boolean {
  //   return (this.key == null || this.key == "")
  //     && (this.scanKey == null || this.scanKey == "") ? true : false;
  // }
  checkRoomKey() {
    // reset validation step
    this.isKeyValid = false;

    const roomKey = this.inputMode === 'textMode' ? this.key : this.scanKey;

    this.checkInService
      .checkRoomKey(roomKey)
      .subscribe(response => {
        console.log(response);

        if (response.length !== 0) {
          this.isKeyValid = true;
          this.router.navigate(['/check-in/home']);
        }
      });
  }
}
