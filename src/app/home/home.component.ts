import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { MatCard, MatCardContent, MatCardHeader } from '@angular/material/card';
import { MatDivider } from '@angular/material/divider';
import { MatIcon } from '@angular/material/icon';
import { MatMenuItem } from '@angular/material/menu';
import { TranslocoDirective } from '@jsverse/transloco';
import {CdkFixedSizeVirtualScroll, CdkVirtualScrollViewport} from "@angular/cdk/scrolling";

@Component({
  selector: 'app-home',
  standalone: true,
    imports: [
        NgOptimizedImage,
        MatCard, MatCardContent,
        MatCardHeader, MatDivider, MatIcon,
        MatMenuItem, TranslocoDirective, CdkFixedSizeVirtualScroll, CdkVirtualScrollViewport
    ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor() {}
}
