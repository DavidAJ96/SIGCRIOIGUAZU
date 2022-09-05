import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { Imenu } from '../../models/Imenu';

@Component({
  selector: 'app-left-sidebar',
  templateUrl: './left-sidebar.component.html',
  styleUrls: ['./left-sidebar.component.css']
})
export class LeftSidebarComponent implements OnInit {
  menu:Imenu[] = []
  subscriber: Subscription
  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.detectChangeRoute();
    this.http.get<Imenu[]>('assets/menu.json').subscribe(menu=>{
      console.log(menu)
      this.menu = menu
       this.activateRoute()
    })
  }

  activateRoute(){

    this.menu.forEach((item,index)=>{
      this.menu[index].active = false;
      if(item.children.length > 0){
          item.children.forEach((sub,indexSub)=>{
             this.menu[index].active = false;
             console.log(window.location.pathname)
             if('/dashboard/'+sub.link ===window.location.pathname ){
                this.menu[index].children[indexSub].active = true
                this.menu[index].active = true;

             }

          })
          return;
      }
      if('/dashboard/'+item.link ===window.location.pathname ){
        this.menu[index].active = true

      }

    })

  }

  detectChangeRoute(){
    this.subscriber = this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event) => {
       this.activateRoute()
    });
  }


  redirect(link:string){
    this.router.navigate(['dashboard/'+link])

  }



}
