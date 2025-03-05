ns create MyAsyncApp --template @nativescript/template-hello-world-ng
cd MyAsyncApp
npm install axios
import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'ns-app',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  public  any[] = [];
  public loading: boolean = true;

  ngOnInit() {
    this.fetchData();
  }

  private async fetchData() {
    try {
      this.loading = true;
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
      this.data = response.data;
    } catch (error) {
      console.error('Error fetching ', error);
    } finally {
      this.loading = false;
    }
  }
}
<StackLayout *ngIf="loading">
  <Label text="Loading..." class="loading-message"></Label>
</StackLayout>

<StackLayout *ngIf="!loading">
  <ListView [items]="data">
    <ng-template let-item="item">
      <Label [text]="item.title" class="item-title"></Label>
    </ng-template>
  </ListView>
</StackLayout>
ns run android
