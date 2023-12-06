/*filename: complexJSCode.js*/

// This code demonstrates a complex simulation of a traffic intersection,
// including traffic lights, vehicles, and pedestrian signals.

// Constants
const RED_LIGHT_DURATION = 10;
const GREEN_LIGHT_DURATION = 20;

// Variables
let redLightTimer = 0;
let greenLightTimer = 0;
let vehiclesInIntersection = 0;
let pedestrianSignalActivated = false;

// Functions
function activateRedLight() {
  console.log("Red light activated!");
  redLightTimer = RED_LIGHT_DURATION;
  greenLightTimer = 0;
}

function activateGreenLight() {
  console.log("Green light activated!");
  greenLightTimer = GREEN_LIGHT_DURATION;
  redLightTimer = 0;
}

function vehicleApproachingIntersection() {
  console.log("Vehicle approaching intersection...");
  vehiclesInIntersection++;
}

function vehicleLeavingIntersection() {
  console.log("Vehicle leaving intersection...");
  vehiclesInIntersection--;
}

function activatePedestrianSignal() {
  console.log("Pedestrian signal activated!");
  pedestrianSignalActivated = true;
}

function deactivatePedestrianSignal() {
  console.log("Pedestrian signal deactivated!");
  pedestrianSignalActivated = false;
}

// Simulation loop
function simulateTrafficIntersection() {
  while (true) {
    if (greenLightTimer > 0) {
      greenLightTimer--;
      if (greenLightTimer === 0) {
        activateRedLight();
      }
    } else if (redLightTimer > 0) {
      redLightTimer--;
      if (redLightTimer === 0) {
        activateGreenLight();
      }
    }

    if (pedestrianSignalActivated) {
      console.log("Pedestrian signal is activated. Vehicles must stop.");
    }

    if (vehiclesInIntersection > 0 && !pedestrianSignalActivated) {
      console.log("Traffic congestion detected. Activating pedestrian signal.");
      activatePedestrianSignal();
    } else if (vehiclesInIntersection === 0 && pedestrianSignalActivated) {
      console.log("Intersection is clear. Deactivating pedestrian signal.");
      deactivatePedestrianSignal();
    }
  }
}

// Entry point
simulateTrafficIntersection();
