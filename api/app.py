from flask import Flask, jsonify, render_template
from flask_cors import CORS

app = Flask(__name__,
    static_url_path="/",
    static_folder='../musica_app/dist',
    template_folder='../musica_app/dist')
CORS(app)

album_data = {
    "albums": [
        {
            "id": 1,
            "album_name": "Mr. Morales & The Big Steppers",
            "artist": "Kendrick Lamar",
            "number_of_songs": 19,
            "year_of_release": "2019",
            "duration": "12 hours",
            "image_url": '/static/images/Rectangle 18.png',
            "songs": [
                {
                    "id": 1,
                    "title": "United In Grief",
                     "image_url": '/static/images/Rectangle 15.png',
                },
                {
                    "id": 2,
                    "title": "N95",
                     "image_url": '/static/images/Rectangle 27.png',
                },
                {
                    "id": 3,
                    "title": "Worldwide Steppers",
                    "image_url": '/static/images/Rectangle 20.png',
                },
                {
                    "id": 4,
                    "title": "Die Hard",
                     "image_url": '/static/images/Rectangle 21.png',
                },
                {
                    "id": 5,
                    "title": "Father Time",
                     "image_url": '/static/images/Rectangle 16.png',
                },
                {
                    "id": 6,
                    "title": "Rich (Interlude)",
                    "image_url": '/static/images/Rectangle 29.png',
                },
                {
                    "id": 7,
                    "title": "Rich Spirit",
                     "image_url": '/static/images/Rectangle 15.png',
                },
                {
                    "id": 8,
                    "title": "We Cry Together",
                     "image_url": '/static/images/Rectangle 14.png',
                },
                {
                    "id": 9,
                    "title": "Purple Hearts",
                    "image_url": '/static/images/Rectangle 14 (1).png',
                },
                {
                    "id": 10,
                    "title": "Count Me Out",
                     "image_url": '/static/images/Rectangle 14 (2).png',
                },
                {
                    "id": 11,
                    "title": "Crown",
                     "image_url": '/static/images/Rectangle 14.png',
                },
                {
                    "id": 12,
                    "title": "Silent Hill",
                    "image_url": '/static/images/Rectangle 14 (1).png',
                },
                {
                    "id": 13,
                    "title": "Saviour (Interlude)",
                     "image_url": '/static/images/Rectangle 14 (2).png',
                },
                {
                    "id": 14,
                    "title": "Saviour",
                     "image_url": '/static/images/Rectangle 14.png',
                },
                {
                    "id":15,
                    "title": "Aunty Diaries",
                    "image_url": '/static/images/Rectangle 14 (1).png',
                },
                {
                    "id": 16,
                    "title": "Mr. Morale",
                    "image_url": '/static/images/Rectangle 14 (1).png',
                },
                {
                    "id": 17,
                    "title": "Mother Sober",
                     "image_url": '/static/images/Rectangle 14 (2).png',
                },
                {
                    "id": 18,
                    "title": "Mirror",
                     "image_url": '/static/images/Rectangle 14.png',
                },
                {
                    "id":19,
                    "title": "The Heart Part 5",
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
            "image_url": '/static/images/Rectangle 20.png',
            "songs": [
                {
                    "id": 1,
                    "title": "First Person Shooter",
                     "image_url": '/static/images/Rectangle 29.png',
                },
                {
                    "id": 2,
                    "title": "Bahamas Promises",
                     "image_url": '/static/images/Rectangle 17.png',
                },
                {
                    "id": 3,
                    "title": "Slime You Out",
                     "image_url": '/static/images/Lead-image.png',
                },
                {
                    "id": 4,
                    "title": "Drew A Picasso",
                    "description":"Just like Picasso",
                    "image_url": '/static/images/Rectangle 14 (5).png',

                },
            ]
        },
        {
            "id": 3,
            "album_name": "King's Disease II",
            "artist": "Nas",
            "number_of_songs": 15,
            "year_of_release": "2023",
            "duration": "16 hours",
            "image_url": '/static/images/Rectangle 17.png',
            "songs": [
                {
                    "id": 1,
                    "title": "The Pressure",
                     "image_url": '/static/images/Rectangle 15.png',

                },
                {
                    "id": 2,
                    "title": "Death Row East",
                     "image_url": '/static/images/Rectangle 29.png',
                },
                {
                    "id": 3,
                    "title": "40 side",
                     "image_url": '/static/images/Rectangle 16.png',
                },
                {
                    "id": 4,
                    "title": "EPMD 2",
                    "image_url": '/static/images/Rectangle 19.png',
                },
                {
                    "id": 5,
                    "title": "Rare",
                    "image_url": '/static/images/Rectangle 27.png',
                },
                {
                    "id": 6,
                    "title": "YKTV",
                    "image_url": '/static/images/Rectangle 15.png',
                },
                {
                    "id": 7,
                    "title": "Store Run",
                     "image_url": '/static/images/Rectangle 26.png',

                },
                {
                    "id": 8,
                    "title": "Moments",
                     "image_url": '/static/images/Rectangle 29.png',
                },
                {
                    "id": 9,
                    "title": "Nobody (feat. Ms. Lauryn Hill)",
                     "image_url": '/static/images/Rectangle 14 (5).png',
                },
                {
                    "id": 10,
                    "title": "No Phony Love",
                    "image_url": '/static/images/Rectangle 14 (4).png',
                },
                {
                    "id": 11,
                    "title": "Brunch on Sundays",
                    "image_url": '/static/images/Rectangle 29.png',
                },
                {
                    "id": 12,
                    "title": "Count Me In",
                    "image_url": '/static/images/Rectangle 14.png',
                },
                {
                    "id": 13,
                    "title": "Composure",
                    "image_url": '/static/images/Rectangle 14 (1).png',
                },
                {
                    "id": 14,
                    "title": "My Bible",
                    "image_url": '/static/images/Rectangle 14 (3).png',
                },
                {
                    "id": 15,
                    "title": "Nas Is Good",
                    "image_url": '/static/images/Rectangle 14 (5).png',
                },
            ]
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
                "image_url": '/static/images/Rectangle 29.png',
            },
            {
                "id": 2,
                "name": "Jay Z",
                "description": "Empire State of Mind",
                "image_url": '/static/images/Rectangle 27.png',
            },
            {
                "id": 3,
                "name": "Lil Wayne",
                "description": "Carter",
                "image_url": '/static/images/Rectangle 28.png',
            },
            {
                "id": 4,
                "name": "Kanye",
                "description": "Niggas in Paris",
                "image_url": '/static/images/Rectangle 29.png',
            },
            {
                "id": 5,
                "name": "Jay Z",
                "description": "Empire State of Mind",
                "image_url": '/static/images/Rectangle 28.png',
            },
            {
                "id": 6,
                "name": "Lil Wayne",
                "description": "Carter",
                "image_url": '/static/images/Rectangle 27.png',
            },
            {
                "id": 7,
                "name": "Kanye",
                "description": "Niggas in Paris",
                "image_url": '/static/images/Rectangle 28.png',
            },
            {
                "id": 8,
                "name": "Jay Z",
                "description": "Empire State of Mind",
                "image_url": '/static/images/Rectangle 29.png',
            },
            {
                "id": 9,
                "name": "Lil Wayne",
                "description": "Carter",
                "image_url": '/static/images/Rectangle 27.png',
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

@app.errorhandler(404)
def not_found(e):
    return app.send_static_file("index.html")

@app.route("/api/albums", methods=['GET'])
def albumItems():
    if "albums" in album_data:
        return jsonify(album_data["albums"])
    return jsonify({"error": "Not Found"}), 404

@app.route("/api/albums/<int:id>", methods=['GET'])
def albumItem(id):
    if "albums" in album_data:
        for album in album_data["albums"]:
            if "id" in album and album["id"] == id:
                return album
        return jsonify({"error": "No ID found"}), 404
    return False

@app.route("/api/collections", methods=['GET'])
def collections():
    return jsonify(collections_data)

@app.route("/api/new_releases", methods=['GET'])
def newReleases():
    return jsonify(new_releases)


if __name__ == "__main__":
    app.run(debug=True)