import { Component, OnInit } from '@angular/core';
import { CollecRootObject } from "../../interfaces/interfaces";
import { MoviesService } from '../../services/movies.service';
import {
  SwiperComponent,
  SwiperDirective,
  SwiperConfigInterface,
  SwiperScrollbarInterface,
  SwiperPaginationInterface,
} from 'ngx-swiper-wrapper';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.scss'],
})
export class SeriesComponent implements OnInit {
  public config: SwiperConfigInterface = {
    slidesPerView: 'auto',
    //  loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    spaceBetween: 30,
    pagination: {
      el: '.swiper-pagination',
      clickable: false,
    },
  };
  collec: CollecRootObject[] = null;
  constructor(private moviesservice: MoviesService) {
     this.moviesservice.getcollec().subscribe((collec) => {
       this.collec = collec;
      // this.loading = false;
       //   this.applyFilter(this.selectedGenre);
     });
  }

  ngOnInit(): void {}
}
