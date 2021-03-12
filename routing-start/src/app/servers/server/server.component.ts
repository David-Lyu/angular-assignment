import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data, Params, Router } from '@angular/router';

import { ServersService } from '../servers.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: {id: number, name: string, status: string};

  constructor(private serversService: ServersService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    // this.server = this.serversService.getServer(1);
    // const id = +this.route.snapshot.params['id'];
    // console.log(id)
    // this.server = this.serversService.getServer(id);
    // console.log(this.server)
    //only need this if the id is changing on this specific page and reusing the component from the same component
    // this.route.params.subscribe((params: Params) => {
    //   this.server = this.serversService.getServer(+params['id']);
    // })
    this.route.data.subscribe((data: Data) => {
      //the ['server'] the server name is what is passed down in the router service
      this.server = data['server']
      console.log(this.server)
    });
  }

  onEdit() {
    this.router.navigate(['edit'], {relativeTo: this.route, queryParamsHandling: 'preserve'})
  }

}
