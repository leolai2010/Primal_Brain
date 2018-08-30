import { Component, ViewChild, OnInit } from '@angular/core';
import { DrawableDirective } from '../../app/drawable.directive';
import * as tf from '../../../../tensorflowApp/node_modules/@tensorflow/tfjs';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.css']
})
export class ApplicationComponent implements OnInit {
  model: tf.Model;
  predictions: any;
  @ViewChild(DrawableDirective) canvas;

  ngOnInit() {
    this.loadModel();
  }
  async loadModel() {
    this.model = await tf.loadModel('/assets/model.json');
  }
  async predict(imageData: ImageData) {
    const pred = await tf.tidy(() => {
      // Convert the canvas pixels to 
      let img = tf.fromPixels(imageData, 1);
      img = img.reshape([1, 28, 28]);
      img = tf.cast(img, 'float32');
      // Make and format the predications
      const output = this.model.predict(img) as any;

      // Save predictions on the component
      this.predictions = Array.from(output.dataSync()); 
    });

  }

}

