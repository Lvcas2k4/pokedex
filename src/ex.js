var getData = function(){
    var getRaceData = function()
    {
        fetch('http://ergast.com/api/f1/2008.json')
        .then(function(response) {
            if (!response.ok) {
                throw new Error("HTTP error " + response.status);
            }
            return response.json();
        }).then(function(data) {
            var raceSeason = data.MRData.RaceTable; 
            var raceData = raceSeason.Races;
            console.log(raceData);
            return raceData;
        })
        .catch(function(err) {
            // ...report/handle the error...
        });
    };
    // Presumbly use `getRaceData` here; the code above only *defines* it.
};