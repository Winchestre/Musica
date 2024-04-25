from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

album_data = {
    "albums": [
        {
            "id": 1,
            "album_name": "Mr Morales And The Big Steppers",
            "artist": "Kendrick Lamar",
            "number_of_songs": 10,
            "year_of_release": "2019",
            "duration": "12 hours",
            "songs": [
                {
                    "id": 1,
                    "title": "Good Kid Bad city",
                    "description":"Compton kid",
                     "image_url": '/static/images/Rectangle 14 (2).png',

                },
                {
                    "id": 2,
                    "title": "NRC",
                    "description":"Straight out of LA",
                     "image_url": '/static/images/Rectangle 14.png',

                },
                {
                    "id": 3,
                    "title": "My Goodness Me",
                    "description":"Kanye wet",
                    "image_url": '/static/images/Rectangle 14 (1).png',

                },
            ]
        },
        {
            "id": 2,
            "album_name": "For All The Dogs",
            "artist": "Drake",
            "number_of_songs": 23,
            "year_of_release": "2023",
            "duration": "16 hours",
            "songs": [
                {
                    "id": 1,
                    "title": "First Person Shooter",
                    "description":"Jcole was on this track",
                     "image_url": '/static/images/Rectangle 29.png',

                },
                {
                    "id": 2,
                    "title": "Bahamas Promises",
                    "description":"Drake came out guns smoking",
                     "image_url": '/static/images/Rectangle 14 (3).png',

                },
                {
                    "id": 3,
                    "title": "Slime You Out",
                    "description":"SZA went in guns blazing",
                     "image_url": '/static/images/Rectangle 14 (4).png',

                },
                {
                    "id": 4,
                    "title": "Drew A Picasso",
                    "description":"Just like Picasso",
                    "image_url": '/static/images/Rectangle 14 (5).png',

                },
            ]
        },
    ]
}

charts_data = {
    "chartsData": [
        {
            "id": 1,
            "title": "8AM in Charlotte",
            "artist": "Drake",
            "duration": "2:14",
            "image_url": "/static/images/Rectangle 29.png",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis",
        },
         {
             "id": 2,
            "title": "GOMD",
            "artist": "JCole",
            "duration": "3:00",
            "image_url": "/static/images/Rectangle 14.png",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis",

        },
        {
             "id": 3,
            "title": "4PM in Calabasas",
            "artist": "Drake",
            "duration": "8:14",
            "image_url": "/static/images/Lead-image.png",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis",

        },
    ]
}

collections_data = {
    "collections":
        [
            {
                "id": 1,
                "name": "Kanye",
                "description": "Niggas in Paris",
                "image_url": '/static/images/Rectangle 14.png',
            },
            {
                "id": 2,
                "name": "Jay Z",
                "description": "Empire State of Mind",
                "image_url": '/static/images/Rectangle 14.png',

            },
            {
                "id": 3,
                "name": "Lil Wayne",
                "description": "Carter",
                "image_url": '/static/images/Rectangle 14.png',

            },
        ]
}

new_releases = {
    "new_releases": [
        {
            "id": 1,
            "name": "Lil Wayne",
            "description": "Carter",
            "image_url": '/static/images/Rectangle 14.png',
        },
        {
            "id": 2,
            "name": "Lil Wayne",
            "description": "Carter",
            "image_url": '/static/images/Rectangle 14 (1).png',

        },
        {
            "id": 3,
            "name": "Lil Wayne",
            "description": "Carter",
            "image_url": '/static/images/Rectangle 14 (2).png',

        },
        {
            "id": 4,
            "name": "Lil Wayne",
            "description": "Carter",
            "image_url": '/static/images/Rectangle 14 (3).png',

        },
        {
            "id": 5,
            "name": "Lil Wayne",
            "description": "Carter",
            "image_url": '/static/images/Rectangle 14 (4).png',

        },
        {
            "id": 6,
            "name": "Lil Wayne",
            "description": "Carter",
            "image_url": '/static/images/Rectangle 14 (5).png',

        },
        {
            "id": 7,
            "name": "Lil Wayne",
            "description": "Carter",
            "image_url": '/static/images/Rectangle 29.png',

        },
        {
            "id": 8,
            "name": "Lil Wayne",
            "description": "Carter",
            "image_url": '/static/images/Rectangle 14.png',

        },

    ]
}
@app.route("/albums", methods=['GET'])
def albumItems():
    if "albums" in album_data:
        return jsonify(album_data["albums"])
    return jsonify({"error": "Not Found"}), 404

@app.route("/albums/<int:id>")
def albumItem(id):
    if "albums" in album_data:
        for album in album_data["albums"]:
            if "id" in album and album["id"] == id:
                for song in album["songs"]:
                    if "id" in song and song["id"] == id:
                        return song
                return jsonify({"error": "No ID found"}), 404
        return jsonify({"error": "No ID found"}), 404
    return False

@app.route("/top_charts", methods=['GET'])
def charts():
    return jsonify(charts_data)

@app.route("/top_charts/<int:id>", methods=['GET'])
def song(id):
    if "chartsData" in charts_data:
        for item in charts_data["chartsData"]:
            if "id" in item and item["id"] == id:
                return item
        return jsonify({"error": "id not found"}), 404
    return False

@app.route("/collections", methods=['GET'])
def collections():
    return jsonify(collections_data)

@app.route("/new_releases", methods=['GET'])
def newReleases():
    return jsonify(new_releases)

if __name__ == "__main__":
    app.run(debug=True)