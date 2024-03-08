

const playSound = sound => {
    try {
        sound.play(() => {
            console.log('success');
        });
    } catch (e) {
        console.log(e);
    }
};

export default playSound;