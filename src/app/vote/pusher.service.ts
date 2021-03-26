import { Injectable } from '@angular/core';
declare const Pusher: any;
declare const promisify: any;

@Injectable()
export class PusherService {
  constructor() {
    var pusher = new Pusher('6f690066721b8bb8d972', {
      cluster: 'eu',
      encrypted: true,
    });
    this.channel = pusher.subscribe('vote-channel');
  }
  channel;

  public init() {
    return this.channel;
  }
}
