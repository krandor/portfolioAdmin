describe('User', function(){
  it('should create user based on provided data', function(){
    var user = new User({name: "Gob", screenname: "GobTheMagnificent", status:"Online"});

    expect(user).toBeDefined();
  });

  it('should hold the name properly', function() {
    var user = new User({name: "Gob", screenname: "GobTheMagnificent", status:"Online"});

    expect(user).toBeDefined();
    expect(user.name).toBe("Gob");
  });

  it('should hold the screenname properly', function() {
    var user = new User({name: "Gob", screenname: "GobTheMagnificent", status:"Online"});

    expect(user).toBeDefined();
    expect(user.screenname).toBe("GobTheMagnificent");
  });

  it('should hold the status properly', function() {
    var user = new User({name: "Gob", screenname: "GobTheMagnificent", status:"Online"});

    expect(user).toBeDefined();
    expect(user.status).toBe("Online");
  });

  it('should compute the statusCss properly', function() {
    var user = new User({name: "Gob", screenname: "GobTheMagnificent", status:"Online"});

    expect(user).toBeDefined();
    expect(user.statusCss()).toBe("text-success");
  });
});
