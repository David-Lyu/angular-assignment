import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

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
    console.log(this.server)
    //only need this if the id is changing on this specific page and reusing the component from the same component
    this.route.params.subscribe((params: Params) => {
      this.server = this.serversService.getServer(+params['id']);
    })
  }

  onEdit() {
    this.router.navigate(['edit'], {relativeTo: this.route, queryParamsHandling: 'preserve'})
  }

}
