import Sound from "react-native-sound";


const playSound = soundUrl => {
    console.log(5,soundUrl)
    const sound = new Sound(soundUrl,
    null,
        error => {
          if (error) {
            console.log(error);
          }
        }
    )
    try {
        sound.play(() => {
            console.log('success');
            sound.release()
        });
    } catch (e) {
        console.log(e);
    }
};

export default playSound;