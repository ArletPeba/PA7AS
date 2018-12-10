import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/guards/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
@Output() featureSelected = new EventEmitter<string>();

  private subscription: Subscription;
  constructor(private authService: AuthService, private router: Router, private route: ActivatedRoute) { }
 

//  onSelect(feature: string){
  //  this.featureSelected.emit(feature);
  //}

  ngOnInit() {
    this.onLogout();
  }
  onLogout(){
    this.authService.logout();
    this.router.navigate(['Signin'], {relativeTo:this.route});
  }


}
