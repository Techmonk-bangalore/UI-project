import { Component, OnInit } from '@angular/core';
import { PusherService } from './pusher.service';
import { HttpClient } from '@angular/common/http';
import { ServiceService } from '../service.service';
// import { ToastrService } from 'ngx-toastr';
import { Injectable } from '@angular/core';


@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.scss']
})

@Injectable()
export class VoteComponent implements OnInit {

  constructor(private pusher: PusherService, private http: HttpClient,private service: ServiceService) {}

  event = 'vote';
  vote = '';
  voted = false;
  playerData = [
    {
      firstName: 'Mo. Salah',
      goals: 30,
      assists: 12,
      name: 'salah',
      image:
        'https://platform-static-files.s3.amazonaws.com/premierleague/photos/players/250x250/p118748.png',
    },
    {
      firstName: 'Christian Eriksen',
      goals: 8,
      assists: 13,
      name: 'eriksen',
      image:
        'https://platform-static-files.s3.amazonaws.com/premierleague/photos/players/250x250/p80607.png',
    },
    {
      firstName: 'Harry Kane',
      goals: 26,
      assists: 5,
      name: 'kane',
      image:
        'https://platform-static-files.s3.amazonaws.com/premierleague/photos/players/40x40/p78830.png',
    },
    {
      firstName: "Kevin De'bruyne",
      goals: 10,
      assists: 17,
      name: 'kevin',
      image:
        'https://platform-static-files.s3.amazonaws.com/premierleague/photos/players/40x40/p61366.png',
    },
  ];
  voteCount = {
    salah: 0,
    kane: 0,
    eriksen: 0,
    kevin: 0,
  };

  chartLabels: string[] = Object.keys(this.voteCount);
  chartData: number[] = Object.values(this.voteCount);
  chartType = 'doughnut';


  
  castVote(player) {
    this.service.vote(player).subscribe((response:any) => {
      if(response){
        this.vote = response.player;
        if(this.vote){
          this.voteCount[ this.vote] += 1;
          this.chartData = Object.values(this.voteCount);
          // this.toastr.success("You casted your vote")
        }
        this.voted = true;
      }
      })
    // this.http
    //   .post('/vote', { player })
    //   .subscribe((res: any) => {
    //     this.vote = res.player;
    //     if(this.vote){
    //       this.voteCount[ this.vote] += 1;
    //       this.chartData = Object.values(this.voteCount);
    //     }
    //     this.voted = true;
    //   });
  }

  getVoteClasses(player) {
    return {
      elect: this.voted && this.vote === player,
      lost: this.voted && this.vote !== player,
    };
  }

  ngOnInit() {
    // const channel = this.pusher.init();
    // channel.bind('vote', ({ player }) => {
    //   this.voteCount[player] += 1;
    //   this.chartData = Object.values(this.voteCount);
    // });
  }

}
