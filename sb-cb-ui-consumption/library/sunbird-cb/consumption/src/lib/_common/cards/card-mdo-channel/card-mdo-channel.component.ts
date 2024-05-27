import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import * as _ from "lodash";
import { TranslateService } from '@ngx-translate/core';
import { ConfigurationsService, EventService, MultilingualTranslationsService, NsContent } from '@sunbird-cb/utils-v2';

@Component({
  selector: 'sb-uic-card-mdo-channel',
  templateUrl: './card-mdo-channel.component.html',
  styleUrls: ['./card-mdo-channel.component.scss']
})
export class CardMDOChannelComponent implements OnInit {
  @Input() widgetData!: NsContent.IContent;
  @Output() userData = new EventEmitter<any>()
  defaultThumbnail: any
  sourceLogos: any
  defaultSLogo: any
  widgetType: any = ''
  widgetSubType: any =''

  constructor(
    private events: EventService,
    private translate: TranslateService,
    private langtranslations: MultilingualTranslationsService,
    private configSvc: ConfigurationsService,) { 
      this.langtranslations.languageSelectedObservable.subscribe(() => {
        if (localStorage.getItem('websiteLanguage')) {
          this.translate.setDefaultLang('en')
          const lang = localStorage.getItem('websiteLanguage')!
          this.translate.use(lang)
        }
      })
    }

  ngOnInit() {
    const instanceConfig = this.configSvc.instanceConfig
    if (instanceConfig) {
      this.defaultThumbnail = instanceConfig.logos.defaultContent || ''
      this.sourceLogos = instanceConfig.sources
      this.defaultSLogo = instanceConfig.logos.defaultSourceLogo || ''
    } else {
      this.defaultThumbnail = '/assets/instances/eagle/app_logos/default.png'
      this.defaultSLogo =  '/assets/instances/eagle/app_logos/KarmayogiBharat_Logo.svg'
    }
  }

  raiseTelemetry() {
    // if(this.forPreview){
    //   return
    // }
    this.events.raiseInteractTelemetry(
      {
        type: 'click',
        subType: `${this.widgetType}-${this.widgetSubType}`,
        id: `${_.camelCase(this.widgetData.content.userId)}-card`,
      },
      {
        id: this.widgetData.content.userId,
        // type: this.widgetData.user.primaryCategory,
        //context: this.widgetData.context,
        rollup: {},
        // ver: `${this.widgetData.user.version}${''}`,
      },
      {
        pageIdExt: `${_.camelCase('user')}-card`,
        module: _.camelCase('user'),
      })
  }

}