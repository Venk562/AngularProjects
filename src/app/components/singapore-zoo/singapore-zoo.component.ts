import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-singapore-zoo',
  standalone: false,
  templateUrl: './singapore-zoo.component.html',
  styleUrl: './singapore-zoo.component.css'
})
export class SingaporeZooComponent implements OnInit {
  zooAnimals = [
    {
      name: 'White Tiger',
      description: 'Powerful and majestic big cat native to India.',
      image: '/assets/images/white-tiger.jpg'
    },
    {
      name: 'Orangutan',
      description: 'Highly intelligent primate known for its reddish hair.',
      image: '/assets/images/Singapore-Zoo-1.jpg'
    },
    {
      name: 'Elephant',
      description: 'Asia’s largest land mammal with gentle behavior.',
      image: '/assets/images/Singapore-Zoo-2.jpg'
    },
    {
      name: 'Penguin',
      description: 'Flightless seabird that thrives in icy climates.',
      image: '/assets/images/Pinguine.jpg'
    }
  ];
  wildlifeParks = [
    {
      title: 'Mandai Wildlife Reserve',
      image: '/assets/images/mandai-wildlife-reserve.webp',
      description: 'The overarching name for Singapore’s wildlife parks, focused on conservation and nature-based experiences.'
    },
    {
      title: 'Singapore Zoo',
      image: '/assets/images/Singapore Zoo Admission Tickets.jpg',
      description: 'A "rainforest zoo" housing over 4,200 animals in naturalistic, open habitats.'
    },
    {
      title: 'River Wonders',
      image: '/assets/images/River Wonders.jpg',
      description: 'Asia’s first river-themed wildlife park, showcasing freshwater ecosystems and species.'
    },
    {
      title: 'Jurong Bird Park',
      image: '/assets/images/jurong-birdpark_2.jpg',
      description: 'One of the world’s largest bird parks, home to a rich diversity of feathered species.'
    },
    {
      title: 'Night Safari',
      image: '/assets/images/night safari tickets-1.JPG',
      description: 'A world-first nocturnal zoo that brings you close to night-active animals in their habitats.'
    },
    {
      title: 'Bird Paradise',
      image: '/assets/images/bird-paradise.webp',
      description: 'A new-generation bird park that opened in 2023, featuring immersive aviaries and interactive experiences.'
    }
  ];

  ngOnInit(): void {
    // Optional: Load data dynamically
  }
}
