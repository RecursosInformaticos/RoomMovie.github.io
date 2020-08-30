import { Component, OnInit,Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MoviesService } from 'src/app/services/movies.service';
import { CollRootObject } from '../../interfaces/movies.model';
@Component({
  selector: 'app-collecdetail',
  templateUrl: './collecdetail.component.html',
  styleUrls: ['./collecdetail.component.scss'],
})
export class CollecdetailComponent implements OnInit {
  collec: CollRootObject = null;
  //
  
  error: string = null;
  valor: string =
    'https://i.pinimg.com/736x/ca/42/6f/ca426f2da11bf3555d9d2598f89e9801.jpg';
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private movieservice: MoviesService
  ) {
//sthis.collec.coverColl='';
  }

  ngOnInit(): void {
    const { id } = this.activatedRoute.snapshot.params;
    // alert(id);
    this.getColl(id);
  }
  getColl(id: string) {
    this.movieservice.getcollecid(id).subscribe(
      (data) => {
        this.collec = data;
        //    this.movie.movieName = data.movieName;
        console.log(this.collec);
        //  this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(
        //  this.movie.url
        // );
        // this.loading = false;
      },
      (err) => (this.error = err)
    );
  }
}
