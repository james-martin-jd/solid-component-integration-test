import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// import { currentSession } from 'solid-auth-client';

// Services
import { AuthService } from '../services/solid.auth.service';
import {RdfService} from '../services/rdf.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  constructor(private auth: AuthService, private route: ActivatedRoute, private rdf: RdfService) {}
  webId: string;

  ngOnInit() {
    console.log('hello');
      this.rdf.getSession().then((newSession) => {
          this.webId = newSession.webId;
      });

  }

  loadSession = async () => {
    // this.session = await currentSession();
  }

  onSignOut = () => {
    this.auth.solidSignOut();
  }

}
