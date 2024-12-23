import { AfterViewInit, Component, EventEmitter, Input, input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import ApexCharts from 'apexcharts';
import { PollVote } from '../types';
@Component({
  selector: 'app-poll-vote',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './poll-vote.component.html',
  styleUrl: './poll-vote.component.scss',
})
export class PollVoteComponent implements AfterViewInit{
  @Input() voted: boolean | undefined;
  @Input() options: string[] | undefined;
  @Input() results: number[] | undefined;
  @Input() question: string | undefined;
  @Input() id:number | undefined;

  @Output() pollVoted:EventEmitter<PollVote> =new EventEmitter();
  voteForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.voteForm = this.fb.group({
      selected: this.fb.control('', [Validators.required]),
    });
  }

  ngAfterViewInit(): void {
    if (this.voted) {
      this.generateChart();
    }
  }

  submitForm() {
    const pollVoted:PollVote={
      id: this.id ?? 0,
      vote: this.voteForm.get("selected")!.value
    }

    this.pollVoted.emit(pollVoted);
  }
  generateChart() {
    const options: ApexCharts.ApexOptions = {
      series: [
        {
          data: this.results || [],
        },
      ],
      chart: {
        height: 350,
        type: 'bar',
      },
      plotOptions: {
        bar: {
          columnWidth: '45%',
          distributed: true,
        },
      },
      legend: {
        show: false,
      },
      xaxis: {
        categories: this.options,
      },
    };
    const chart = new ApexCharts(
      document.getElementById('poll-result'),
      options
    );
    chart.render();
  }
}
