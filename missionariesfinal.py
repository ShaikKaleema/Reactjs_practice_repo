good = {(0, 0), (3, 0), (0, 3), (3, 1), (3, 2), (2, 2), (1, 1), (0, 2), (0, 1)}
count = 0

def printsolution(ans, d):
    print(f"Solution - {count}:")
    print("(M, C, B)")
    cur = ans
    while d[cur] != cur:
        print(cur)
        cur = d[cur]
    print(cur)

def solve(s, d):
    global count
    if s[0] == s[1] == 0:
        count += 1
        printsolution(s, d)
        return
    pos = [(-1, 0), (-1, -1), (-2, 0), (0, -2), (0, -1)]
    a, b, c = s[0], s[1], s[2]
    if c == 0:
        mul = -1
    else:
        mul = 1
    for i in pos:
        x, y = i
        na = a+x*mul
        nb = b+y*mul
        t = (na, nb, c ^ 1)
        if (na, nb) in good and t not in d:
            d[t] = s
            solve(t, d)
            del d[t]

s = (3, 3, 1)
d = {s: s}
solve(s, d)