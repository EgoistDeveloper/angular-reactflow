import { ChangeDetectorRef, Component } from '@angular/core';
import ReactFlow, { Background, Controls } from 'reactflow';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public Flow: any = ReactFlow;

  public props: any = {
    edges: [
      { id: '1-2', source: '1', target: '2', label: 'to the', type: 'step' },
    ],

    nodes: [
      {
        id: '1',
        data: { label: 'Hello' },
        position: { x: 0, y: 0 },
        type: 'input',
      },
      {
        id: '2',
        data: { label: 'World' },
        position: { x: 100, y: 100 },
      },
    ],
  };

  public constructor(private changeDetectorRef: ChangeDetectorRef) {}

  onNgInit() {
    // nested components
    this.Flow.Background = Background;
    this.Flow.Controls = Controls;

    this.Flow.defaultStyles = {
      background: {
        fill: '#aaa',
        stroke: '#555',
      },
    };

    this.changeDetectorRef.detectChanges();
  }
}
