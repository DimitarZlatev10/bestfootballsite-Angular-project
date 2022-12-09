import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { IShirt } from 'src/app/interfaces/shirt';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  id: any = null;
  item: IShirt[] | any = [];

  constructor(private route: ActivatedRoute, private apiService: ApiService) {}
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.id);

    this.apiService.loadShirtById(this.id).subscribe({
      next: (value) => {
        console.log(value);
        this.item = value;
      },
      error: (err) => {
        console.error(err);
      },
    });
  }
}
