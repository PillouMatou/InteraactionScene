import { Component, OnInit } from '@angular/core';
import {SettingsService} from '../../services/settings.service';
import {LanguageService} from '../../services/language.service';
import {Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {AddSceneDialogComponent} from "../add-scene-dialog/add-scene-dialog.component";
import {DisplaySiteASFRComponent} from "../display-site-asfr/display-site-asfr.component";

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  constructor(public settingsService: SettingsService,
              public languageService: LanguageService,
              private dialog: MatDialog,
              public router: Router) { }

  ngOnInit(): void {
    let lang = location.href.substring(24,26);
    this.languageService.switchLanguage(lang);
  }
  backEn(){
    this.router.navigate(['en/dashboard']);
  }
  backFr(){
    this.router.navigate(['fr/dashboard']);
  }

  getAFSRLogoPNGUrl(s): string {
    return 'url(assets/images/'+ s +'.png)';
  }

  openDialogASFR() {
    this.dialog.open(DisplaySiteASFRComponent,{
      height: '90%',
      width: '90%'
    });
  }
}
