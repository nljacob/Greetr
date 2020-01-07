(function(global, $){

    var Greetr = function(firstname, lastname, language){
        return new Greetr.init(firstname, lastname, language);
    }

    Greetr.prototype = {};

    Greeter.init = function(firstname, lastname, language){
        
        var self = this;
        self.firstname = firstname || '';
        self.lastname = lastname || '';
        self.language = language || 'en'
    }

    Greetr.init.prototype = Greetr.prototype;

})(window, jQuery)

