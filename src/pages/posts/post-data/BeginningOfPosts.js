import React from 'react';

const title = 'Beginning of Posts';
const date = '11/18/2021';

function BeginningOfPosts() {
  return (
    <div>
      <h2>{title}</h2>

      <div><span>{date}</span></div>

      <div className="content">
        <p>
          A friend who is just getting started on learning programming reached out
          to me and asked: "... is learning the meaning/usage/definition of a
          command line the most important about coding? ... I can probably search
          all the [command lines] of a specific program on google[,] and syntax is
          too annoying. ... I want to understand how to 'learn' first." I thought he
          was referring to command line (cli), so I gave him some background of
          command line and the difference between cli and GUI programs. However, I
          realized I was quick to assume because he later aligned me on what he was
          trying to understand, which is if he should memorize all the syntax of the
          language he's trying to learn. That got me thinking back to how I started
          -- I, too, was unsure of where to begin and what questions to ask. Right
          questions/words are the north stars in the journey. So *direction* is
          crutial in learning, not just programming but all other disciplines as
          well. Helping people get started in learning how to code is part of the
          main reason why I started this *posts* section.
        </p>
        <p>
          Going back to my friend's original question, I answered him with the
          analogy of spoken languages: Programming languages' syntax is analogous to
          our spoken languages' grammar, alphabets/characters, and words. It's
          normal to not have all the syntax of a programming language memorized when
          you are just getting started. It's like most people don't know all the
          English words or words in other languages. That's why dictionaries and
          documents of grammar rules exist, and that's why we have documentation in
          programming languages. Most of us as professionals rely on documentation
          of the technology/language we use all the time. It's completely normal to
          not be able to memorize everything.
          <br />
          To extend the conversation a little further, I added that if he's going to
          call himself an xxx (name of programming language) programmer, then he is
          assumed to speak the language fluently, meaning, he should not rely
          heavily on documentation on basic syntax.
        </p>
        <p>
          Of course, I encouraged him to have fun at the end of the conversation.
          It's an important part of learning.
        </p>
      </div>
    </div>
  );
}

export default {
  title,
  date,
  content: BeginningOfPosts,
  pathName: 'beginning-of-posts',
};
