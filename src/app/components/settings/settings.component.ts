import { Component, OnInit } from '@angular/core';
import {SettingsService} from '../../services/settings.service';
import {LanguageService} from '../../services/language.service';
import {Router} from "@angular/router";
import { ScenesService } from 'src/app/services/scenes.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  constructor(public settingsService: SettingsService,
              public languageService: LanguageService,
              public router: Router,
              public scenesService: ScenesService) { }

  ngOnInit(): void {
    let lang = location.href.substring(24,26);
    this.languageService.switchLanguage(lang);
    this.scenesService.loadUserOfUsersList(localStorage.getItem('logged'));
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
}
