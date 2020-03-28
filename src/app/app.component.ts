import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import {
    EventData,
    LayoutBase,
    View
} from "@nativescript/core/ui/layouts/layout-base";
import { CubicBezierAnimationCurve } from "@nativescript/core/ui/animation/animation";

@Component({
    selector: "ns-app",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {

    @ViewChild('toggle', {static: true}) layout: ElementRef;

    public ngOnInit(): void {

        const lb = this.layout.nativeElement as LayoutBase;

        const toggler = lb.getViewById('toggler') as View;

        lb.eachChildView((v: View) => {
            if (v.className === "toggler") {
                return;
            }
            v.on("tap", (a: EventData) => {
                const lbl = a.object as View;
                const loc = lbl.getLocationRelativeTo(lb);
                
                toggler.animate({
                    translate: { x: loc.x, y:0},
                    duration: 500,
                    curve: new CubicBezierAnimationCurve(0.6, 0.72, 0, 1)
                });
            });

            return true;
        });
    }
}
