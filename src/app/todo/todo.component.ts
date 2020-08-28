import { Component, OnInit, EventEmitter, Output, Input } from "@angular/core";
import { Selfcare } from "../interfaces/selfcare";

@Component({
  selector: "app-todo",
  templateUrl: "./todo.component.html",
  styleUrls: ["./todo.component.css"],
})
export class TodoComponent implements OnInit {
  @Input() post: Selfcare;
  @Output() deleted = new EventEmitter<any>();
  constructor() {}

  ngOnInit(): void {}

  deletePost() {
    this.deleted.emit();
  }
}
