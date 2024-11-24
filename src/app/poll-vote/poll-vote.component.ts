import { Component, Input, input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import ApexCharts from 'apexcharts';
@Component({
  selector: 'app-poll-vote',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './poll-vote.component.html',
  styleUrl: './poll-vote.component.scss',
})
export class PollVoteComponent {
  @Input() voted: boolean | undefined;
  @Input() options: string[] | undefined;
  @Input() results: number[] | undefined;
  @Input() question: string | undefined;
  voteForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.voteForm = this.fb.group({
      selected: this.fb.control('', [Validators.required]),
    });
  }

  ngOnInit(): void {
    if (this.voted) {
      this.generateChart();
    }
  }

  submitForm() {
    console.log(this.voteForm.value);
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
