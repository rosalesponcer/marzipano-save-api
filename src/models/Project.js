import { Schema, model } from 'mongoose';

const Project = model('Project', new Schema(
    {
        name: String,
        scenes: [
            {
                id: String,
                name: String,
                imgUrl: String,

                initialViewParameters: {
                    yaw: Number,
                    pitch: Number,
                    fov: Number
                },

                linkHotspots: [
                    {
                        yaw: Number,
                        pitch: Number,
                        rotation: Number,
                        target: String
                    }
                ],
                infoHotspots: [
                    {
                        yaw: Number,
                        pitch: Number,
                        title: String,
                        text: String
                    }
                ]
            }
        ]
    },
    {
        timestamps: true,
        versionKey: false
    }
))

export default Project