var facebook = /** @class */ (function () {
    //constructor definition
    function facebook(birtday, mobile, email, currentcity, hometown, gender, languages, relation, interest) {
        var _this = this;
        //Method Impelementation
        this.getAge = function () {
            console.log("Age Calcualtion Logic");
        };
        this.getMobile = function () {
            return _this.mobile;
        };
        this.getHometown = function () {
            return _this.hometown;
        };
        this.getCurrentCity = function () {
            return _this.currentcity;
        };
        this.getRelation = function () {
            return _this.relation;
        };
        this.getGender = function () {
            return _this.gender;
        };
        this.getEmail = function () {
            return _this.email;
        };
        this.getInterest = function () {
            for (var _i = 0, _a = _this.interest; _i < _a.length; _i++) {
                var z = _a[_i];
                console.log(z);
            }
        };
        this.getLanguages = function () {
            for (var _i = 0, _a = _this.languages; _i < _a.length; _i++) {
                var v = _a[_i];
                console.log(v);
            }
        };
        this.birthday = birtday;
        this.mobile = mobile;
        this.email = email;
        this.currentcity = currentcity;
        this.hometown = hometown;
        this.gender = gender;
        this.languages = languages;
        this.relation = relation;
        this.interest = interest;
    }
    return facebook;
}()); //End of class
//Object Creation
var obj1 = new facebook("25-JULY-1994", "+919766838941", "rushirvk94@gmail.com", "Thane", "Ambajogai", "Male", ["Marathi", "Hindi", "English"], "Single", ["Men", "Women"]);
//Storing Results
obj1.getAge();
obj1.getLanguages();
obj1.getInterest();
var em = obj1.getEmail();
var ge = obj1.getGender();
var mo = obj1.getMobile();
var ho = obj1.getHometown();
var curre = obj1.getCurrentCity();
var re = obj1.getRelation();
//Printing Results
console.log(em);
console.log(ge);
console.log(mo);
console.log(ho);
console.log(re);
console.log(curre);
