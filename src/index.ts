type KeyPoint = keyof Point;


type a = {[x: string]: string};

type b = keyof a;

function func() {
  return {
    x: 1,
    y: 2
  }
}

type typeFunc = ReturnType<typeof func>;
type keyTypeFunc = ReturnType<keyof typeof func>;

