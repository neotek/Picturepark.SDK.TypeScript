import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

// MODULES
import { SharedModule } from './shared-module/shared-module.module';

// SDK components
import { BasketItemComponent } from './components/basket/basket-item/basket-item.component';
import { BasketComponent } from './components/basket/basket.component';
import { ContentAggregationComponent } from './components/content-aggregation-list/content-aggregation/content-aggregation.component';
import { ContentAggregationListComponent } from './components/content-aggregation-list/content-aggregation-list.component';
import { ContentBrowserItemComponent } from './components/content-browser/content-browser-item/content-browser-item.component';
import { ContentDownloadDialogComponent } from './components/content-download-dialog/content-download-dialog.component';
import {
  ShareContentRecipientsInputComponent
} from './components/share-content-dialog/share-content-recipients-input/share-content-recipients-input.component';
import { ChannelPickerComponent } from './components/channel-picker/channel-picker.component';
import { ContentBrowserComponent } from './components/content-browser/content-browser.component';
import { DatePickerComponent } from './components/date-picker/date-picker.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { OutputDownloadMenuComponent } from './components/output-download-menu/output-download-menu.component';
import { LayerPanelsComponent } from './components/layer-panels/layer-panels.component';
import { FieldDetailInfoDialogComponent } from './components/layer-panels/field-detail-info-dialog/field-detail-info-dialog.component';
import {
  ListItemAggregationComponent
} from './components/list-item-aggregation-list/list-item-aggregation/list-item-aggregation.component';
import { ListItemAggregationListComponent } from './components/list-item-aggregation-list/list-item-aggregation-list.component';
import { ShareContentDialogComponent } from './components/share-content-dialog/share-content-dialog.component';
import {
  ShareContentDialogItemComponent
} from './components/share-content-dialog/share-content-dialog-item/share-content-dialog-item.component';
import {
  ShareContentDialogNotificationComponent
} from './components/share-content-dialog/share-content-dialog-notification/share-content-dialog-notification.component';

// SDK services
import { ContentItemSelectionService } from './services/content-item-selection.service';
import { BasketService } from './services/basket.service';
import { LiquidRenderingService } from './services/liquid-rendering.service';

// SDK directives
import { LazyLoadDirective } from './directives/lazy-load.directive';

// IMPORTANT: Update docs/picturepark-sdk-v1-angular/modules.md when changing modules

@NgModule({
  declarations: [
    BasketComponent,
    BasketItemComponent,
    ChannelPickerComponent,
    ContentBrowserComponent,
    ContentAggregationComponent,
    ContentAggregationListComponent,
    ContentBrowserItemComponent,
    ContentDownloadDialogComponent,
    DatePickerComponent,
    FieldDetailInfoDialogComponent,
    ListItemAggregationComponent,
    ListItemAggregationListComponent,
    OutputDownloadMenuComponent,
    LazyLoadDirective,
    LayerPanelsComponent,
    ShareContentRecipientsInputComponent,
    ShareContentDialogComponent,
    ShareContentDialogItemComponent,
    ShareContentDialogNotificationComponent,
    SearchBoxComponent,
  ],
  providers: [
    ContentItemSelectionService,
    BasketService,
    LiquidRenderingService,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
  ],
  exports: [
    ChannelPickerComponent,
    ContentBrowserComponent,
    SearchBoxComponent,
    LayerPanelsComponent,
    ContentAggregationListComponent,
    ListItemAggregationListComponent,
    BasketComponent,
    OutputDownloadMenuComponent,
    CommonModule,
    ContentDownloadDialogComponent,
    SharedModule
  ],
  entryComponents: [
    ContentDownloadDialogComponent,
    ShareContentRecipientsInputComponent,
    DatePickerComponent,
    FieldDetailInfoDialogComponent,
    ShareContentDialogComponent,
    ShareContentDialogItemComponent,
    ShareContentDialogNotificationComponent
  ]
})
export class PictureparkUiModule {}

