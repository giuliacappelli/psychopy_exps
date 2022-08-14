/******************* 
 * Likert_Ita Test *
 *******************/

import { PsychoJS } from './lib/core-2020.2.js';
import * as core from './lib/core-2020.2.js';
import { TrialHandler } from './lib/data-2020.2.js';
import { Scheduler } from './lib/util-2020.2.js';
import * as visual from './lib/visual-2020.2.js';
import * as sound from './lib/sound-2020.2.js';
import * as util from './lib/util-2020.2.js';
//some handy aliases as in the psychopy scripts;
const { abs, sin, cos, PI: pi, sqrt } = Math;
const { round } = util;

// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: false,
  color: new util.Color([0.859, 0.639, 0.38]),
  units: 'height',
  waitBlanking: true
});

// store info about the experiment session:
let expName = 'likert_ita';  // from the Builder filename that created this script
let expInfo = {'participant': '', 'session': '001'};

// Start code blocks for 'Before Experiment'
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); }, flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(consentRoutineBegin());
flowScheduler.add(consentRoutineEachFrame());
flowScheduler.add(consentRoutineEnd());
const trials_3LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trials_3LoopBegin, trials_3LoopScheduler);
flowScheduler.add(trials_3LoopScheduler);
flowScheduler.add(trials_3LoopEnd);
const trials_2LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trials_2LoopBegin, trials_2LoopScheduler);
flowScheduler.add(trials_2LoopScheduler);
flowScheduler.add(trials_2LoopEnd);
const trials_4LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trials_4LoopBegin, trials_4LoopScheduler);
flowScheduler.add(trials_4LoopScheduler);
flowScheduler.add(trials_4LoopEnd);
const trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trialsLoopBegin, trialsLoopScheduler);
flowScheduler.add(trialsLoopScheduler);
flowScheduler.add(trialsLoopEnd);
flowScheduler.add(thanksRoutineBegin());
flowScheduler.add(thanksRoutineEachFrame());
flowScheduler.add(thanksRoutineEnd());
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  });

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.EXP);


var frameDur;
function updateInfo() {
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2020.2.10';
  expInfo['OS'] = window.navigator.platform;

  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  
  return Scheduler.Event.NEXT;
}


var consentClock;
var form;
var key_resp;
var polygon;
var accept_or_no;
var instrClock;
var polygon_2;
var instr_allow;
var instructions;
var key_resp_3;
var demoClock;
var polygon_3;
var democheck;
var survey;
var key_resp_2;
var trainClock;
var polygon_6;
var questionText_2;
var slider_2;
var key_resp_6;
var tips_2;
var text;
var trialClock;
var polygon_4;
var questionText;
var slider;
var key_resp_4;
var kickout_count;
var tips;
var exp_target_loop;
var text_2;
var title;
var text_3;
var polygon_5;
var thanksClock;
var text_9;
var goodbye;
var globalClock;
var routineTimer;
function experimentInit() {
  // Initialize components for Routine "consent"
  consentClock = new util.Clock();
  form = new visual.TextStim({
    win: psychoJS.window,
    name: 'form',
    text: 'Nel questionario non ti saranno chieste informazioni personali. Non sarà possibile per nessuno risalire alla tua identità a partire dalle risposte che darai nel questionario. I dati che fornirai saranno usati ai fini di questo esperimento linguistico e potranno essere condivisi con terzi in forma anonima. Completando il questionario, dichiari di accettare questi termini. Se abbandoni il questionario in anticipo, i tuoi dati non saranno usati nello studio e non riceverai alcun compenso.\n\nDovrai usare un computer con tastiera!',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.1], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: 0.0 
  });
  
  key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  polygon = new visual.Rect ({
    win: psychoJS.window, name: 'polygon', 
    width: [1, 0.15][0], height: [1, 0.15][1],
    ori: 0, pos: [0, (- 0.4)],
    lineWidth: 1, lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color([1, 1, 1]),
    opacity: 0.5, depth: -3, interpolate: true,
  });
  
  accept_or_no = new visual.TextStim({
    win: psychoJS.window,
    name: 'accept_or_no',
    text: 'Premi Y per continuare o N per uscire.',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.4)], height: 0.07,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -4.0 
  });
  
  // Initialize components for Routine "instr"
  instrClock = new util.Clock();
  polygon_2 = new visual.Rect ({
    win: psychoJS.window, name: 'polygon_2', 
    width: [1, 0.15][0], height: [1, 0.15][1],
    ori: 0, pos: [0, (- 0.4)],
    lineWidth: 1, lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color([1, 1, 1]),
    opacity: 0.5, depth: 0, interpolate: true,
  });
  
  instr_allow = new visual.TextStim({
    win: psychoJS.window,
    name: 'instr_allow',
    text: 'Premi Y per continuare o N per uscire.',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.4)], height: 0.07,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -1.0 
  });
  
  instructions = new visual.TextStim({
    win: psychoJS.window,
    name: 'instructions',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.1], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -2.0 
  });
  
  key_resp_3 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "demo"
  demoClock = new util.Clock();
  polygon_3 = new visual.Rect ({
    win: psychoJS.window, name: 'polygon_3', 
    width: [1, 0.15][0], height: [1, 0.15][1],
    ori: 0, pos: [0, (- 0.2)],
    lineWidth: 1, lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color([1, 1, 1]),
    opacity: 0.5, depth: 0, interpolate: true,
  });
  
  democheck = new visual.TextStim({
    win: psychoJS.window,
    name: 'democheck',
    text: 'Premi Y per rispondere "sì" o N per rispondere "no".',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.2)], height: 0.07,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -1.0 
  });
  
  survey = new visual.TextStim({
    win: psychoJS.window,
    name: 'survey',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.2], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -2.0 
  });
  
  key_resp_2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "train"
  trainClock = new util.Clock();
  polygon_6 = new visual.Rect ({
    win: psychoJS.window, name: 'polygon_6', 
    width: [1, 0.1][0], height: [1, 0.1][1],
    ori: 0, pos: [0, 0.2],
    lineWidth: 1, lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color([1, 1, 1]),
    opacity: 0.5, depth: 0, interpolate: true,
  });
  
  questionText_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'questionText_2',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -1.0 
  });
  
  slider_2 = new visual.Slider({
    win: psychoJS.window, name: 'slider_2',
    size: [1.0, 0.03], pos: [0, (- 0.2)], units: 'height',
    labels: ["1 \r\n \r\n del tutto  \r\n inaccettabile", "2", "3", "4", "5", "6", "7 \r\n \r\n del tutto  \r\n accettabile"], ticks: [1, 2, 3, 4, 5, 6, 7],
    granularity: 1, style: [visual.Slider.Style.RADIO],
    color: new util.Color('black'), 
    fontFamily: 'HelveticaBold', bold: true, italic: false, depth: -2, 
    flip: false,
  });
  
  key_resp_6 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  tips_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'tips_2',
    text: 'Questa è una sessione di allenamento. Prova quante volte vuoi!',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.35], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -5.0 
  });
  
  text = new visual.TextStim({
    win: psychoJS.window,
    name: 'text',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.2], height: 0.04,  wrapWidth: undefined, ori: 0,
    color: new util.Color([(- 0.663), (- 0.89), (- 0.89)]),  opacity: 1,
    depth: -6.0 
  });
  
  // Initialize components for Routine "trial"
  trialClock = new util.Clock();
  polygon_4 = new visual.Rect ({
    win: psychoJS.window, name: 'polygon_4', 
    width: [1, 0.1][0], height: [1, 0.1][1],
    ori: 0, pos: [0, 0.25],
    lineWidth: 1, lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color([1, 1, 1]),
    opacity: 0.5, depth: 0, interpolate: true,
  });
  
  questionText = new visual.TextStim({
    win: psychoJS.window,
    name: 'questionText',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.1)], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -1.0 
  });
  
  slider = new visual.Slider({
    win: psychoJS.window, name: 'slider',
    size: [1.0, 0.03], pos: [0, (- 0.2)], units: 'height',
    labels: ["1 \r\n \r\n del tutto  \r\n inaccettabile", "2", "3", "4 \r\n \r\n usa tutta  \r\n la scala!", "5", "6", "7 \r\n \r\n del tutto  \r\n accettabile"], ticks: [1, 2, 3, 4, 5, 6, 7],
    granularity: 1, style: [visual.Slider.Style.RADIO],
    color: new util.Color('black'), 
    fontFamily: 'HelveticaBold', bold: true, italic: false, depth: -2, 
    flip: false,
  });
  
  key_resp_4 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  kickout_count = 0;
  
  tips = new visual.TextStim({
    win: psychoJS.window,
    name: 'tips',
    text: 'Clicca su un valore, poi premi SPAZIO per continuare.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.25], height: 0.03,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -5.0 
  });
  
  exp_target_loop = 0;
  
  text_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_2',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.35], height: 0.03,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -7.0 
  });
  
  title = new visual.TextStim({
    win: psychoJS.window,
    name: 'title',
    text: "Questo è l'esperimento vero e proprio!",
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.35), 0.45], height: 0.035,  wrapWidth: undefined, ori: 0,
    color: new util.Color([0.004, (- 0.749), (- 0.749)]),  opacity: 1,
    depth: -8.0 
  });
  
  text_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_3',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.1], height: 0.03,  wrapWidth: undefined, ori: 0,
    color: new util.Color([(- 0.663), (- 0.89), (- 0.89)]),  opacity: 1,
    depth: -9.0 
  });
  
  polygon_5 = new visual.Rect ({
    win: psychoJS.window, name: 'polygon_5', 
    width: [1, 0.1][0], height: [1, 0.1][1],
    ori: 0, pos: [0, 0.1],
    lineWidth: 1, lineColor: new util.Color([0.859, (- 0.914), (- 0.914)]),
    fillColor: new util.Color([0.859, (- 0.914), (- 0.914)]),
    opacity: 0.3, depth: -10, interpolate: true,
  });
  
  // Initialize components for Routine "thanks"
  thanksClock = new util.Clock();
  text_9 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_9',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.3)], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: 0.0 
  });
  
  goodbye = new visual.TextStim({
    win: psychoJS.window,
    name: 'goodbye',
    text: 'Grazie per la collaborazione! \n\nIl questionario finirà tra',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -2.0 
  });
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var _key_resp_allKeys;
var consentComponents;
function consentRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'consent'-------
    t = 0;
    consentClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp.keys = undefined;
    key_resp.rt = undefined;
    _key_resp_allKeys = [];
    // keep track of which components have finished
    consentComponents = [];
    consentComponents.push(form);
    consentComponents.push(key_resp);
    consentComponents.push(polygon);
    consentComponents.push(accept_or_no);
    
    for (const thisComponent of consentComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function consentRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'consent'-------
    // get current time
    t = consentClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *form* updates
    if (t >= 0.0 && form.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      form.tStart = t;  // (not accounting for frame time here)
      form.frameNStart = frameN;  // exact frame index
      
      form.setAutoDraw(true);
    }

    
    // *key_resp* updates
    if (t >= 0.0 && key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp.tStart = t;  // (not accounting for frame time here)
      key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp.clearEvents(); });
    }

    if (key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp.getKeys({keyList: ['y', 'n'], waitRelease: false});
      _key_resp_allKeys = _key_resp_allKeys.concat(theseKeys);
      if (_key_resp_allKeys.length > 0) {
        key_resp.keys = _key_resp_allKeys[_key_resp_allKeys.length - 1].name;  // just the last key pressed
        key_resp.rt = _key_resp_allKeys[_key_resp_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *polygon* updates
    if (t >= 0.0 && polygon.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      polygon.tStart = t;  // (not accounting for frame time here)
      polygon.frameNStart = frameN;  // exact frame index
      
      polygon.setAutoDraw(true);
    }

    
    // *accept_or_no* updates
    if (t >= 0.0 && accept_or_no.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      accept_or_no.tStart = t;  // (not accounting for frame time here)
      accept_or_no.frameNStart = frameN;  // exact frame index
      
      accept_or_no.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of consentComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function consentRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'consent'-------
    for (const thisComponent of consentComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    if ((key_resp.keys === "n")) {
        psychoJS.quit();
    } else {
        if ((key_resp.keys === "y")) {
            continueRoutine = true;
        }
    }
    
    // the Routine "consent" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var trials_3;
var currentLoop;
function trials_3LoopBegin(trials_3LoopScheduler) {
  // set up handler to look after randomisation of conditions etc
  trials_3 = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: 'resources/instructions_2.csv',
    seed: undefined, name: 'trials_3'
  });
  psychoJS.experiment.addLoop(trials_3); // add the loop to the experiment
  currentLoop = trials_3;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisTrial_3 of trials_3) {
    const snapshot = trials_3.getSnapshot();
    trials_3LoopScheduler.add(importConditions(snapshot));
    trials_3LoopScheduler.add(instrRoutineBegin(snapshot));
    trials_3LoopScheduler.add(instrRoutineEachFrame(snapshot));
    trials_3LoopScheduler.add(instrRoutineEnd(snapshot));
    trials_3LoopScheduler.add(endLoopIteration(trials_3LoopScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


function trials_3LoopEnd() {
  psychoJS.experiment.removeLoop(trials_3);

  return Scheduler.Event.NEXT;
}


var trials_2;
function trials_2LoopBegin(trials_2LoopScheduler) {
  // set up handler to look after randomisation of conditions etc
  trials_2 = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: 'resources/demographics.csv',
    seed: undefined, name: 'trials_2'
  });
  psychoJS.experiment.addLoop(trials_2); // add the loop to the experiment
  currentLoop = trials_2;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisTrial_2 of trials_2) {
    const snapshot = trials_2.getSnapshot();
    trials_2LoopScheduler.add(importConditions(snapshot));
    trials_2LoopScheduler.add(demoRoutineBegin(snapshot));
    trials_2LoopScheduler.add(demoRoutineEachFrame(snapshot));
    trials_2LoopScheduler.add(demoRoutineEnd(snapshot));
    trials_2LoopScheduler.add(endLoopIteration(trials_2LoopScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


function trials_2LoopEnd() {
  psychoJS.experiment.removeLoop(trials_2);

  return Scheduler.Event.NEXT;
}


var trials_4;
function trials_4LoopBegin(trials_4LoopScheduler) {
  // set up handler to look after randomisation of conditions etc
  trials_4 = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: 'resources/trainers.csv',
    seed: undefined, name: 'trials_4'
  });
  psychoJS.experiment.addLoop(trials_4); // add the loop to the experiment
  currentLoop = trials_4;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisTrial_4 of trials_4) {
    const snapshot = trials_4.getSnapshot();
    trials_4LoopScheduler.add(importConditions(snapshot));
    trials_4LoopScheduler.add(trainRoutineBegin(snapshot));
    trials_4LoopScheduler.add(trainRoutineEachFrame(snapshot));
    trials_4LoopScheduler.add(trainRoutineEnd(snapshot));
    trials_4LoopScheduler.add(endLoopIteration(trials_4LoopScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


function trials_4LoopEnd() {
  psychoJS.experiment.removeLoop(trials_4);

  return Scheduler.Event.NEXT;
}


var trials;
function trialsLoopBegin(trialsLoopScheduler) {
  // set up handler to look after randomisation of conditions etc
  trials = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1, method: TrialHandler.Method.RANDOM,
    extraInfo: expInfo, originPath: undefined,
    trialList: 'resources/stimuli_ita.csv',
    seed: undefined, name: 'trials'
  });
  psychoJS.experiment.addLoop(trials); // add the loop to the experiment
  currentLoop = trials;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisTrial of trials) {
    const snapshot = trials.getSnapshot();
    trialsLoopScheduler.add(importConditions(snapshot));
    trialsLoopScheduler.add(trialRoutineBegin(snapshot));
    trialsLoopScheduler.add(trialRoutineEachFrame(snapshot));
    trialsLoopScheduler.add(trialRoutineEnd(snapshot));
    trialsLoopScheduler.add(endLoopIteration(trialsLoopScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


function trialsLoopEnd() {
  psychoJS.experiment.removeLoop(trials);

  return Scheduler.Event.NEXT;
}


var _key_resp_3_allKeys;
var instrComponents;
function instrRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'instr'-------
    t = 0;
    instrClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    instructions.setText(instrflow);
    key_resp_3.keys = undefined;
    key_resp_3.rt = undefined;
    _key_resp_3_allKeys = [];
    // keep track of which components have finished
    instrComponents = [];
    instrComponents.push(polygon_2);
    instrComponents.push(instr_allow);
    instrComponents.push(instructions);
    instrComponents.push(key_resp_3);
    
    for (const thisComponent of instrComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function instrRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'instr'-------
    // get current time
    t = instrClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *polygon_2* updates
    if (t >= 0.0 && polygon_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      polygon_2.tStart = t;  // (not accounting for frame time here)
      polygon_2.frameNStart = frameN;  // exact frame index
      
      polygon_2.setAutoDraw(true);
    }

    
    // *instr_allow* updates
    if (t >= 0.0 && instr_allow.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instr_allow.tStart = t;  // (not accounting for frame time here)
      instr_allow.frameNStart = frameN;  // exact frame index
      
      instr_allow.setAutoDraw(true);
    }

    
    // *instructions* updates
    if (t >= 0.0 && instructions.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instructions.tStart = t;  // (not accounting for frame time here)
      instructions.frameNStart = frameN;  // exact frame index
      
      instructions.setAutoDraw(true);
    }

    
    // *key_resp_3* updates
    if (t >= 0.0 && key_resp_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_3.tStart = t;  // (not accounting for frame time here)
      key_resp_3.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_3.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_3.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_3.clearEvents(); });
    }

    if (key_resp_3.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_3.getKeys({keyList: ['y', 'n'], waitRelease: false});
      _key_resp_3_allKeys = _key_resp_3_allKeys.concat(theseKeys);
      if (_key_resp_3_allKeys.length > 0) {
        key_resp_3.keys = _key_resp_3_allKeys[_key_resp_3_allKeys.length - 1].name;  // just the last key pressed
        key_resp_3.rt = _key_resp_3_allKeys[_key_resp_3_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of instrComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instrRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'instr'-------
    for (const thisComponent of instrComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    if ((key_resp_3.keys === "n")) {
        psychoJS.quit();
    } else {
        if ((key_resp_3.keys === "y")) {
            continueRoutine = true;
        }
    }
    
    // the Routine "instr" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_2_allKeys;
var demoComponents;
function demoRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'demo'-------
    t = 0;
    demoClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    survey.setText(question);
    key_resp_2.keys = undefined;
    key_resp_2.rt = undefined;
    _key_resp_2_allKeys = [];
    // keep track of which components have finished
    demoComponents = [];
    demoComponents.push(polygon_3);
    demoComponents.push(democheck);
    demoComponents.push(survey);
    demoComponents.push(key_resp_2);
    
    for (const thisComponent of demoComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function demoRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'demo'-------
    // get current time
    t = demoClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *polygon_3* updates
    if (t >= 0.0 && polygon_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      polygon_3.tStart = t;  // (not accounting for frame time here)
      polygon_3.frameNStart = frameN;  // exact frame index
      
      polygon_3.setAutoDraw(true);
    }

    
    // *democheck* updates
    if (t >= 0.0 && democheck.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      democheck.tStart = t;  // (not accounting for frame time here)
      democheck.frameNStart = frameN;  // exact frame index
      
      democheck.setAutoDraw(true);
    }

    
    // *survey* updates
    if (t >= 0.0 && survey.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      survey.tStart = t;  // (not accounting for frame time here)
      survey.frameNStart = frameN;  // exact frame index
      
      survey.setAutoDraw(true);
    }

    
    // *key_resp_2* updates
    if (t >= 0.0 && key_resp_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_2.tStart = t;  // (not accounting for frame time here)
      key_resp_2.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_2.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_2.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_2.clearEvents(); });
    }

    if (key_resp_2.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_2.getKeys({keyList: ['y', 'n'], waitRelease: false});
      _key_resp_2_allKeys = _key_resp_2_allKeys.concat(theseKeys);
      if (_key_resp_2_allKeys.length > 0) {
        key_resp_2.keys = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].name;  // just the last key pressed
        key_resp_2.rt = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of demoComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function demoRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'demo'-------
    for (const thisComponent of demoComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    if ((key_resp_2.keys === "n")) {
        psychoJS.quit();
    } else {
        if ((key_resp_2.keys === "y")) {
            continueRoutine = true;
        }
    }
    
    // the Routine "demo" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_6_allKeys;
var trainComponents;
function trainRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'train'-------
    t = 0;
    trainClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    questionText_2.setText(trainer);
    slider_2.reset()
    key_resp_6.keys = undefined;
    key_resp_6.rt = undefined;
    _key_resp_6_allKeys = [];
    // keep track of which components have finished
    trainComponents = [];
    trainComponents.push(polygon_6);
    trainComponents.push(questionText_2);
    trainComponents.push(slider_2);
    trainComponents.push(key_resp_6);
    trainComponents.push(tips_2);
    trainComponents.push(text);
    
    for (const thisComponent of trainComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var msg;
var cond_filler2;
var cond_control2;
function trainRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'train'-------
    // get current time
    t = trainClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *polygon_6* updates
    if (t >= 0.0 && polygon_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      polygon_6.tStart = t;  // (not accounting for frame time here)
      polygon_6.frameNStart = frameN;  // exact frame index
      
      polygon_6.setAutoDraw(true);
    }

    
    // *questionText_2* updates
    if (t >= 0.0 && questionText_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      questionText_2.tStart = t;  // (not accounting for frame time here)
      questionText_2.frameNStart = frameN;  // exact frame index
      
      questionText_2.setAutoDraw(true);
    }

    
    // *slider_2* updates
    if (t >= 0.0 && slider_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      slider_2.tStart = t;  // (not accounting for frame time here)
      slider_2.frameNStart = frameN;  // exact frame index
      
      slider_2.setAutoDraw(true);
    }

    msg = "Clicca su un valore e premi F per continuare";
    if ((slider_2.getRating() !== null)) {
        cond_filler2 = ((kind2 === "BAD") && (slider_2.getRating() > 2.0));
        cond_control2 = ((kind2 === "GOOD") && (slider_2.getRating() < 6.0));
        if ((key_resp_6.keys === "f")) {
            if ((cond_filler2 || cond_control2)) {
                msg = "Oh, no! Prova di nuovo e premi F sulla tastiera";
            } else {
                msg = "S\u00ec! Premi SPAZIO per continuare";
            }
        }
        if ((key_resp_6.keys === "space")) {
            continueRoutine = false;
        }
    }
    
    
    // *key_resp_6* updates
    if ((slider_2.rating) && key_resp_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_6.tStart = t;  // (not accounting for frame time here)
      key_resp_6.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_6.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_6.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_6.clearEvents(); });
    }

    if (key_resp_6.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_6.getKeys({keyList: ['space', 'f'], waitRelease: false});
      _key_resp_6_allKeys = _key_resp_6_allKeys.concat(theseKeys);
      if (_key_resp_6_allKeys.length > 0) {
        key_resp_6.keys = _key_resp_6_allKeys[_key_resp_6_allKeys.length - 1].name;  // just the last key pressed
        key_resp_6.rt = _key_resp_6_allKeys[_key_resp_6_allKeys.length - 1].rt;
      }
    }
    
    
    // *tips_2* updates
    if (t >= 0.0 && tips_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      tips_2.tStart = t;  // (not accounting for frame time here)
      tips_2.frameNStart = frameN;  // exact frame index
      
      tips_2.setAutoDraw(true);
    }

    
    // *text* updates
    if (t >= 0.0 && text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text.tStart = t;  // (not accounting for frame time here)
      text.frameNStart = frameN;  // exact frame index
      
      text.setAutoDraw(true);
    }

    
    if (text.status === PsychoJS.Status.STARTED){ // only update if being drawn
      text.setText(msg, false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of trainComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function trainRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'train'-------
    for (const thisComponent of trainComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('slider_2.response', slider_2.getRating());
    psychoJS.experiment.addData('slider_2.rt', slider_2.getRT());
    // the Routine "train" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_4_allKeys;
var msg_kickout;
var feedbackMsg;
var trialComponents;
function trialRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'trial'-------
    t = 0;
    trialClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    questionText.setText(sentence);
    slider.reset()
    key_resp_4.keys = undefined;
    key_resp_4.rt = undefined;
    _key_resp_4_allKeys = [];
    msg_kickout = (((("Risposte sbagliate: " + kickout_count.toString()) + ". Hai a disposizione altri ") + (5 - kickout_count).toString()) + " tentativi.");
    
    feedbackMsg = (((("hai completato " + exp_target_loop.toString()) + " frasi su ") + trials.nTotal.toString()) + "!");
    
    text_2.setText(feedbackMsg);
    // keep track of which components have finished
    trialComponents = [];
    trialComponents.push(polygon_4);
    trialComponents.push(questionText);
    trialComponents.push(slider);
    trialComponents.push(key_resp_4);
    trialComponents.push(tips);
    trialComponents.push(text_2);
    trialComponents.push(title);
    trialComponents.push(text_3);
    trialComponents.push(polygon_5);
    
    for (const thisComponent of trialComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var cond_filler;
var cond_control;
function trialRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'trial'-------
    // get current time
    t = trialClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *polygon_4* updates
    if (t >= 0.0 && polygon_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      polygon_4.tStart = t;  // (not accounting for frame time here)
      polygon_4.frameNStart = frameN;  // exact frame index
      
      polygon_4.setAutoDraw(true);
    }

    
    // *questionText* updates
    if (t >= 0.0 && questionText.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      questionText.tStart = t;  // (not accounting for frame time here)
      questionText.frameNStart = frameN;  // exact frame index
      
      questionText.setAutoDraw(true);
    }

    
    // *slider* updates
    if (t >= 0.0 && slider.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      slider.tStart = t;  // (not accounting for frame time here)
      slider.frameNStart = frameN;  // exact frame index
      
      slider.setAutoDraw(true);
    }

    
    // *key_resp_4* updates
    if ((slider.rating) && key_resp_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_4.tStart = t;  // (not accounting for frame time here)
      key_resp_4.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_4.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_4.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_4.clearEvents(); });
    }

    if (key_resp_4.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_4.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_4_allKeys = _key_resp_4_allKeys.concat(theseKeys);
      if (_key_resp_4_allKeys.length > 0) {
        key_resp_4.keys = _key_resp_4_allKeys[_key_resp_4_allKeys.length - 1].name;  // just the last key pressed
        key_resp_4.rt = _key_resp_4_allKeys[_key_resp_4_allKeys.length - 1].rt;
      }
    }
    
    if ((slider.getRating() !== null)) {
        cond_filler = ((kind === "FILLER") && (slider.getRating() > 3.0));
        cond_control = ((kind === "CONTROL") && (slider.getRating() < 5.0));
        if ((key_resp_4.keys === "space")) {
            if ((cond_filler || cond_control)) {
                msg_kickout = "Attenzione! Questa \u00e8 una domanda di controllo, la tua risposta \u00e8 errata. Clicca su un altro punteggio! L'esperimento continuer\u00e0 quando fornirai una risposta adeguata.";
                if ((kickout_count === 5)) {
                    psychoJS.quit();
                }
            } else {
                continueRoutine = false;
            }
        }
    }
    
    
    // *tips* updates
    if (t >= 0.0 && tips.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      tips.tStart = t;  // (not accounting for frame time here)
      tips.frameNStart = frameN;  // exact frame index
      
      tips.setAutoDraw(true);
    }

    
    // *text_2* updates
    if (t >= 0.0 && text_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_2.tStart = t;  // (not accounting for frame time here)
      text_2.frameNStart = frameN;  // exact frame index
      
      text_2.setAutoDraw(true);
    }

    
    // *title* updates
    if (t >= 0.0 && title.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      title.tStart = t;  // (not accounting for frame time here)
      title.frameNStart = frameN;  // exact frame index
      
      title.setAutoDraw(true);
    }

    
    // *text_3* updates
    if (t >= 0.0 && text_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_3.tStart = t;  // (not accounting for frame time here)
      text_3.frameNStart = frameN;  // exact frame index
      
      text_3.setAutoDraw(true);
    }

    
    if (text_3.status === PsychoJS.Status.STARTED){ // only update if being drawn
      text_3.setText(msg_kickout, false);
    }
    
    // *polygon_5* updates
    if (t >= 0.0 && polygon_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      polygon_5.tStart = t;  // (not accounting for frame time here)
      polygon_5.frameNStart = frameN;  // exact frame index
      
      polygon_5.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of trialComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function trialRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'trial'-------
    for (const thisComponent of trialComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('slider.response', slider.getRating());
    psychoJS.experiment.addData('slider.rt', slider.getRT());
    if ((msg_kickout === "Attenzione! Questa \u00e8 una domanda di controllo, la tua risposta \u00e8 errata. Clicca su un altro punteggio! L'esperimento continuer\u00e0 quando fornirai una risposta adeguata.")) {
        kickout_count += 1;
    } else {
        msg_kickout = msg_kickout;
    }
    
    exp_target_loop += 1;
    
    // the Routine "trial" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var startTime;
var thanksComponents;
function thanksRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'thanks'-------
    t = 0;
    thanksClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(5.000000);
    // update component parameters for each repeat
    startTime = new Date();
    text_9.text = ''
    // keep track of which components have finished
    thanksComponents = [];
    thanksComponents.push(text_9);
    thanksComponents.push(goodbye);
    
    for (const thisComponent of thanksComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
var leftTime;
var timeelapsed;
function thanksRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'thanks'-------
    // get current time
    t = thanksClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_9* updates
    if (t >= 0.0 && text_9.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_9.tStart = t;  // (not accounting for frame time here)
      text_9.frameNStart = frameN;  // exact frame index
      
      text_9.setAutoDraw(true);
    }

    frameRemains = 0.0 + 5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((text_9.status === PsychoJS.Status.STARTED || text_9.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      text_9.setAutoDraw(false);
    }
    leftTime = new Date();
    timeelapsed = (startTime - leftTime)/1000
    text_9.text = Math.round(5+timeelapsed)
    
    // *goodbye* updates
    if (t >= 0.0 && goodbye.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      goodbye.tStart = t;  // (not accounting for frame time here)
      goodbye.frameNStart = frameN;  // exact frame index
      
      goodbye.setAutoDraw(true);
    }

    frameRemains = 0.0 + 5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((goodbye.status === PsychoJS.Status.STARTED || goodbye.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      goodbye.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of thanksComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function thanksRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'thanks'-------
    for (const thisComponent of thanksComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    return Scheduler.Event.NEXT;
  };
}


function endLoopIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        const thisTrial = snapshot.getCurrentTrial();
        if (typeof thisTrial === 'undefined' || !('isTrials' in thisTrial) || thisTrial.isTrials) {
          psychoJS.experiment.nextEntry(snapshot);
        }
      }
    return Scheduler.Event.NEXT;
    }
  };
}


function importConditions(currentLoop) {
  return function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
