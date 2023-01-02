import React, { useState } from "react";
import ReactDOM from 'react-dom'
import ReactAudioPlayer from "react-audio-player";
import "./index.css";
const sounds = [
  {
    key: "A",
    mp3: "https://audiodeploy.netlify.app/1%20El-Fatiha,%201-7.mp3",
  },
  {
    key: "B",
    mp3: "https://audiodeploy.netlify.app/2%20El-Bekara,%20255.mp3",
  },
  {
    key: "C",
    mp3: "https://audiodeploy.netlify.app/3%20El-Bekara,%20285-286.mp3",
  },
  {
    key: "D",
    mp3: "https://audiodeploy.netlify.app/4%20Ali%20Imran,%2085.mp3",
  },
  {
    key: "E",
    mp3: "https://audiodeploy.netlify.app/5%20Junus,%2057-28.mp3",
  },
  {
    key: "F",
    mp3: "https://audiodeploy.netlify.app/6%20Er-Rad,%2028-29.mp3",
  },
  {
    key: "G",
    mp3: "https://audiodeploy.netlify.app/7%20Taha,%20124-126.mp3",
  },
  {
    key: "H",
    mp3: "https://audiodeploy.netlify.app/8%20El-Mu'minun,%20115-116.mp3",
  },
  {
    key: "I",
    mp3: "https://audiodeploy.netlify.app/9%20En-Nur,%2035-38.mp3",
  }
];


const App = () => {
  const [keys, setKeys] = useState([
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
  ]);
  const [active, setActive]=useState(false);
  return (
    <>
      <h1>Quran Player</h1>
      <span id="text"></span>
      <div id="display" className="display">
        {sounds.map((sound, id) => {
          return <Box text={sound.key} audio={sound.mp3} />;
        })}
      </div>
    </>
  );
};
const playSound = (audioRef,props) => {
  audioRef.current.play();
  if(props.text==='A')
  ReactDOM.render(
    <>
  <p>[All] praise is [due] to Allah, Lord of the worlds –</p>
  <p>The Entirely Merciful, the Especially Merciful,</p>
  <p>Sovereign of the Day of Recompense.</p>
  <p>It is You we worship and You we ask for help.</p>
  <p>Guide us to the straight path –</p>
  <p>The path of those upon whom You have bestowed favor, </p>
  <p>not of those who have evoked [Your] anger or of those who are astray</p>
  <p>[Quran, 1:1-7]</p>
    </>
    , document.getElementById('text'));
  if(props.text==='B')
  ReactDOM.render(
    <>
    <p>Allāh - there is no deity except Him, the Ever-Living, the Self-Sustaining. Neither drowsiness overtakes Him nor sleep. To Him belongs whatever is in the heavens and whatever is on the earth. Who is it that can intercede with Him except by His permission? He knows what is [presently] before them and what will be after them, and they encompass not a thing of His knowledge except for what He wills. His Kursī extends over the heavens and the earth, and their preservation tires Him not. And He is the Most High, the Most Great.</p>
    <p>[Quran, 2:255]</p>
    </>, document.getElementById('text'));
if(props.text==='C')
  ReactDOM.render(
    <>
    <p>The Messenger has believed in what was revealed to him from his Lord, and [so have] the believers. All of them have believed in Allāh and His angels and His books and His messengers, [saying], "We make no distinction between any of His messengers." And they say, "We hear and we obey. [We seek] Your forgiveness, our Lord, and to You is the [final] destination."</p>
    <p>Allāh does not charge a soul except [with that within] its capacity. It will have [the consequence of] what [good] it has gained, and it will bear [the consequence of] what [evil] it has earned. "Our Lord, do not impose blame upon us if we have forgotten or erred. Our Lord, and lay not upon us a burden like that which You laid upon those before us. Our Lord, and burden us not with that which we have no ability to bear. And pardon us; and forgive us; and have mercy upon us. You are our protector, so give us victory over the disbelieving people."</p>
    <p>[Quran, 2:285-286]</p> 
    </>, document.getElementById('text'));
if(props.text==='D')
  ReactDOM.render(
    <>
    <p>And whoever desires other than Islām as religion - never will it be accepted from him, and he, in the Hereafter, will be among the losers.</p>
    <p>[Quran, 3:85]</p>
    </>, document.getElementById('text'));
if(props.text==='E')
  ReactDOM.render(
    <>
    <p>O mankind, there has come to you instruction from your Lord and healing for what is in the breasts and guidance and mercy for the believers.</p>
    <p>Say, "In the bounty of Allāh and in His mercy - in that let them rejoice; it is better than what they accumulate."</p>
    <p>[Quran, 10:57-58]</p>
    </>, document.getElementById('text'));
if(props.text==='F')
  ReactDOM.render(
    <>
    <p>Those who have believed and whose hearts are assured by the remembrance of Allāh. Unquestionably, by the remembrance of Allāh hearts are assured."</p>
    <p>Those who have believed and done righteous deeds - a good state is theirs and a good return.</p>
    <p>[Quran, 13:28-29]</p>
    </>, document.getElementById('text'));
if(props.text==='G')
  ReactDOM.render(
    <>
    <p>And whoever turns away from My remembrance - indeed, he will have a depressed [i.e., difficult] life, and We will gather [i.e., raise] him on the Day of Resurrection blind."</p>
    <p>He will say, "My Lord, why have you raised me blind while I was [once] seeing?"</p>
    <p>[Allāh] will say, "Thus did Our signs come to you, and you forgot [i.e., disregarded] them; and thus will you this Day be forgotten."</p>
    <p>[Quran, 20:124-126]</p>
    </>, document.getElementById('text'));
if(props.text==='H')
  ReactDOM.render(
    <>
    <p>Then did you think that We created you uselessly and that to Us you would not be returned?"</p>
    <p>So exalted is Allāh, the Sovereign, the Truth; there is no deity except Him, Lord of the Noble Throne.</p>
    <p>[Quran, 23:115-116]</p>
    </>, document.getElementById('text'));
if(props.text==='I')
  ReactDOM.render(
    <>
    <p>Allāh is the Light of the heavens and the earth. The example of His light is like a niche within which is a lamp; the lamp is within glass, the glass as if it were a pearly [white] star lit from [the oil of] a blessed olive tree, neither of the east nor of the west, whose oil would almost glow even if untouched by fire. Light upon light. Allāh guides to His light whom He wills. And Allāh presents examples for the people, and Allāh is Knowing of all things.</p>
    <p>[Such niches are] in houses [i.e., mosques] which Allāh has ordered to be raised and that His name be mentioned [i.e., praised] therein; exalting Him within them in the morning and the evenings</p>
    <p>[Are] men whom neither commerce nor sale distracts from the remembrance of Allāh and performance of prayer and giving of zakāh. They fear a Day in which the hearts and eyes will [fearfully] turn about –</p>
   <p>That Allāh may reward them [according to] the best of what they did and increase them from His bounty. And Allāh gives provision to whom He wills without account [i.e., limit].</p>
   <p>[Quran, 24:35-38]</p> 
    </>, document.getElementById('text'));

  }
const Box = (props) => {
  const audioRef = React.useRef();

  return (
    <div className="box" onClick={() => playSound(audioRef,props)}>
      {props.text}
      <audio
        src={props.audio}
        ref={audioRef}
      />
    </div>
  );
};

export default App;
