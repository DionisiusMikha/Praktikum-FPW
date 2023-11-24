const fs = require('fs');
const dataPath = require('path').resolve(__dirname, './data.json');
const rawData = fs.readFileSync(dataPath);
const data = JSON.parse(rawData);

const showAllData = (req, res) => {
    return res.status(200).send(data);
}

const registerUser = (req, res) => {
    const { email, first_name, last_name, password } = req.body;

    try {
        const userExists = data.find(u => u.email === email);

        if (userExists) {
            return res.status(400).send({ message: "already_exist" });
        }

        const newUser = {
            email,
            first_name,
            last_name,
            password,
            story: []
        };

        data.push(newUser);

        return res.status(201).send({ message: "created" });
    } catch (error) {
        return res.status(400).send(error);
    }
};


const loginUser = (req, res) => {
    const { email, password } = req.body;

    const user = data.find(u => u.email === email);

    if (!user) {
        return res.status(404).send({ message: "not_found" });
    }

    if (user.password === password) {
        return res.status(200).send({ message: "success" });
    }

    return res.status(400).send({ message: "wrong_password" });
};


const getStory = (req, res) => {
    const { email } = req.query;

    const user = data.find(u => u.email === email);

    if (!user) {
        return res.status(404).send({ message: "not_found" });
    }

    const data_story = user.story;

    return res.status(200).send({ data: data_story });
};


const getUserData = (req, res) => {
    const { email } = req.query;

    const user = data.find(u => u.email === email);

    if (!user) {
        return res.status(404).send({ message: "not_found" });
    }

    const userData = {
        email: user.email,
        first_name: user.first_name,
        last_name: user.last_name,
        password: user.password
    };

    return res.status(200).send({ data: userData });
};


const getStoryId = (req, res) => {
    const { email, id } = req.query;

    const user = data.find(u => u.email === email);

    if (!user) {
        return res.status(404).send({ message: "not_found" });
    }

    const story = user.story.find(s => s.id == id);

    if (!story) {
        return res.status(404).send({ message: "story_not_found" });
    }

    return res.status(200).send({ data: story });
};


const addStory = (req, res) => {
    const { email } = req.body;

    const user = data.find(u => u.email === email);

    if (!user) {
        return res.status(404).send({ message: "not_found" });
    }

    const tempData = {
        id: user.story.length + 1,
        judul: "",
        thumb: "",
        chara: []
    };

    user.story.push(tempData);
    
    return res.status(200).send(data);
};


const updateThumb = (req, res) => {
    const { email, id, thumb } = req.body;

    const user = data.find(u => u.email === email);

    if (!user) {
        return res.status(404).send({ message: "not_found" });
    }

    const story = user.story.find(s => s.id == id);

    if (!story) {
        return res.status(404).send({ message: "story_not_found" });
    }

    story.thumb = thumb;

    return res.status(200).send(data);
};


const updateJudul = (req, res) => {
    const { email, id, judul } = req.body;

    const user = data.find(u => u.email === email);

    if (!user) {
        return res.status(404).send({ message: "not_found" });
    }

    const story = user.story.find(s => s.id == id);

    if (!story) {
        return res.status(404).send({ message: "story_not_found" });
    }

    story.judul = judul;

    return res.status(200).send(data);
};

const deleteStory = (req, res) => {
    const { email, id } = req.query;

    const user = data.find(u => u.email === email);

    if (!user) {
        return res.status(404).send({ message: "not_found" });
    }

    const resetStory = (stories) => {
        stories.forEach((story, index) => {
            story.id = index + 1;
        });
    };

    user.story = user.story.filter(s => s.id != id);
    resetStory(user.story);
    
    return res.status(200).send(data);
};

module.exports = {
    showAllData,
    registerUser,
    loginUser,
    getStory,
    getUserData,
    getStoryId,
    addStory,
    updateThumb,
    updateJudul,
    deleteStory
}