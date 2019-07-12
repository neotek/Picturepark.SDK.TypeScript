import { Component, Injector, OnChanges, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

// LIBRARIES
import {
  Share, ShareSearchRequest, SearchBehavior, ShareService, SortDirection, SortInfo, ShareSearchResult
} from '@picturepark/sdk-v1-angular';

// COMPONENTS
import { BaseBrowserComponent } from '../../shared-module/components/browser-base/browser-base.component';

@Component({
  selector: 'pp-share-browser',
  templateUrl: './share-browser.component.html',
  styleUrls: [
    '../../shared-module/components/browser-base/browser-base.component.scss',
    './share-browser.component.scss'
  ]
})
export class ShareBrowserComponent extends BaseBrowserComponent<Share> implements OnChanges {

  constructor(
    private activatedRoute: ActivatedRoute,
    injector: Injector,
    private router: Router,
    private shareService: ShareService
  ) {
    super('ShareBrowserComponent', injector);
  }

  init(): void {
    this.loadData();
  }

  initSort(): void {
  }

  onScroll(): void {
    this.loadData();
  }

  getSearchRequest(): Observable<ShareSearchResult> | undefined {
    if (this.isLoading) { return; }

    const request = new ShareSearchRequest({
      debugMode: false,
      pageToken: this.nextPageToken,
      filter: this.filter ? this.filter : undefined,
      limit: this.pageSize,
      searchString: this.searchString,
      searchBehaviors: [
        SearchBehavior.SimplifiedSearch,
        SearchBehavior.DropInvalidCharactersOnFailure,
        SearchBehavior.WildcardOnSingleTerm
      ],
      sort: this.activeSortingType.field === 'relevance' ? [] : [
        new SortInfo({
          field: this.activeSortingType.field,
          direction: this.isAscending ? SortDirection.Asc : SortDirection.Desc
        })
      ]
    });

    return this.shareService.search(request);
  }

  // CHECK IF ELEMENT CONTAINS CLASS NAME
  checkContains(elementClassName: string): boolean {
    const containClasses = ['browser'];
    return containClasses.some(iClass => elementClassName.includes(iClass));
  }

  itemClicked(item): void {
    this.router.navigate([item.id], { relativeTo: this.activatedRoute });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['filter'] || changes['searchString']) {
      this.update();
    }
  }
}
