// import the required animation functions from the angular animations module
import { trigger, state, animate, transition, style } from '@angular/animations';
import {inherits} from "util";

export const fadeInAnimation =
    // trigger name for attaching this animation to an element using the [@triggerName] syntax
    trigger('fadeInAnimation', [
        // style({ opacity: 0 , backgroundColor: 'rgba(0, 0, 0, 0.8)'}),
        // style({ transition: 'opacity 3s'}),
        // animate('6s cubic-bezier(.35,0,.25,1)', style({ opacity: 1 })),
        // state('inactive', style({
        //     backgroundColor: '#eee',
        //     transform: 'scale(1)'
        // })),
        state('*', style({ opacity: 0 , color: 'red', transition: 'opacity 3s'})),
        // transition('inactive => active', animate('100ms ease-in')),
        // transition('active => inactive', animate('100ms ease-out')),
        transition(":enter", [
            style({ opacity: 0 , color: 'red', display: 'none'}),
            // animate(500, style({ opacity: 1 }))
            // animate('6s cubic-bezier(.35,0,.25,1)', style({ opacity: 1 })),
            animate('2s', style({ opacity: 1 , color: 'green', display: 'inherit'}))
        ]),
        transition(":leave", [
            // style({ opacity: 1 , color: 'green', display: 'none'}),
            // animate(500, style({ opacity: 0 }))
            // animate('.1s', style({ opacity: 0 , display: 'none'}))
            // animate('6s cubic-bezier(.35,0,.25,1)', style('{ opacity: 0 })),
        ]),
        // route 'enter' transition
        // transition('* => *', [
        //
        //     // style({ opacity: 0 , backgroundColor: 'rgba(0, 0, 0, 0.8)'}),
        //     // animate(1000, style({ opacity: 1 }))
        //
        //     // css styles at start of transition
        //     style({ opacity: 0 }),
        //     // animation and styles at end of transition
        //     animate('6s cubic-bezier(.35,0,.25,1)', style({ opacity: 1 })),
        //     // css styles at start of transition
        //     // style({ opacity: 0 }),
        //
        //     // animation and styles at end of transition
        //     // animate('.3s', style({ opacity: 1 }))
        // ]),
    ]);

export const slideInOutAnimation =
    // trigger name for attaching this animation to an element using the [@triggerName] syntax
    trigger('slideInOutAnimation', [

        // end state styles for route container (host)
        state('*', style({
            // the view covers the whole screen with a semi tranparent background
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.8)'
        })),

        // route 'enter' transition
        transition(':enter', [

            // styles at start of transition
            style({
                // start with the content positioned off the right of the screen,
                // -400% is required instead of -100% because the negative position adds to the width of the element
                right: '-400%',

                // start with background opacity set to 0 (invisible)
                backgroundColor: 'rgba(0, 0, 0, 0)'
            }),

            // animation and styles at end of transition
            animate('.5s ease-in-out', style({
                // transition the right position to 0 which slides the content into view
                right: 0,

                // transition the background opacity to 0.8 to fade it in
                backgroundColor: 'rgba(0, 0, 0, 0.8)'
            }))
        ]),

        // route 'leave' transition
        transition(':leave', [
            // animation and styles at end of transition
            animate('.5s ease-in-out', style({
                // transition the right position to -400% which slides the content out of view
                right: '-400%',

                // transition the background opacity to 0 to fade it out
                backgroundColor: 'rgba(0, 0, 0, 0)'
            }))
        ])
    ]);