const stubLocation = (options) => ({
  onBeforeLoad(win) {
    const stubLocation = {
      coords: {
        latitidue: options.latitude,
        longitude: options.longitude
      },
    };
    debugger;
    cy.stub(win.navigator.geolocation, "getCurrentPosition").callsFake(
      (callback) => {
        return callback(stubLocation);
      }
    );
  },
});

export default stubLocation;