function decodeMessage(key: string, message: string): string {
  const newMessage = [...new Set(key.replace(/\s/g, ""))];
  const n = newMessage.length;
  const map = new Map();
  for (let i = 0; i < n; i++) {
    map.set(newMessage[i], geterateSmall()[i]);
  }
  let str = "";

  for (let i = 0; i < message.length; i++) {
    str += map.get(message[i]);
  }
  return str.replace(/undefined/g, " ");
}

function geterateSmall() {
  const str: string[] = [];
  for (let i = 97; i < 123; i++) {
    str.push(String.fromCharCode(i));
  }

  return str;
}

// leetcode
function decodeMessage2(key: string, message: string): string {
  const map: Map<string, string> = new Map();
  let a = 0;
  let res: string = "";
  map.set(" ", " ");
  for (let index = 0; index < key.length; index++) {
    if (key[index] != " " && !map.has(key[index])) {
      map.set(key[index], String.fromCharCode(97 + a));
      a++;
    }
  }
  for (let k of message) {
    res += map.get(k);
  }
  return res;
}
