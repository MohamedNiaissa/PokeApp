import Sound from "react-native-sound";


const playSound = sound => {
    const s = new Sound(sound,
    null,
        error => {
          if (error) {
            console.log(error);
          }
        }
    )
    try {
        s.play(() => {
            console.log('success');
            s.release()
        });
    } catch (e) {
        console.log(e);
    }
};

export default playSound;