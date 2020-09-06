import { Component, OnInit,Input } from '@angular/core';
import { SeriesRootObject,Season,Episode } from '../../interfaces/movies.model';
import { MoviesService } from '../../services/movies.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-seriesdetail',
  templateUrl: './seriesdetail.component.html',
  styleUrls: ['./seriesdetail.component.scss'],
})
export class SeriesdetailComponent implements OnInit {
  @Input()
  serie: SeriesRootObject = null;
  season: Season[] = null;
  episodes:Episode[]=null;
  urlSafe: SafeResourceUrl=null;
  error: string = null;
  loading: boolean = true;
  constructor(
    private activatedRoute: ActivatedRoute,
    private movieservice: MoviesService,
    public sanitizer: DomSanitizer
  ) {}

  ngOnInit() {
    const { id } = this.activatedRoute.snapshot.params;
    //alert(id);
    this.getMovie(id);
  }

  getMovie(id: string) {
    this.movieservice.getserieid(id).subscribe(
      (data) => {
        this.serie = data;
        this.season = data.seasons;
      
        this.episodes=data.seasons[1].episodes;
        console.log(this.episodes);
        this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(
          this.episodes[0].url
        );
        this.loading = false;
      },
      (err) => (this.error = err)
    );
  }
}
