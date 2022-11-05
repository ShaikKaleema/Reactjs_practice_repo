def countMisMatch(state):
    count = 0
    finalState  = [5,3,6,7,0,2,4,1,8]
    for i in range(9):
        if(state[i]!=0 and state[i]!=finalState[i]):
            count = count + 1
    return count

def printMatrix(state):
    for i in range(9):
        if(i%3 == 0):
            print()
        print(state[i],end=" ")
        

def solvePuzzle(state):
    level = 0
    h = 1
    while(h>0):
        level = level + 1
        index_0 = state.index(0)
        if(index_0 == 0):
            arr = [1,3]
            state,h = move(arr,index_0,state)
        elif(index_0 == 1):
            arr = [0,2,4]
            state,h = move(arr,index_0,state)
        elif(index_0 == 2):
            arr = [1,5]
            state,h = move(arr,index_0,state)
        elif(index_0 == 3):
            arr = [0,4,6]
            state,h = move(arr,index_0,state)
        elif(index_0 == 4):
            arr = [1,3,5,7]
            state,h = move(arr,index_0,state)
        elif(index_0 == 5):
            arr = [2,4,8]
            state,h = move(arr,index_0,state)
        elif(index_0 == 6):
            arr = [3,7]
            state,h = move(arr,index_0,state)
        elif(index_0 == 7):
            arr = [4,6,8]
            state,h = move(arr,index_0,state)
        elif(index_0 == 8):
            arr = [5,7]
            state,h = move(arr,index_0,state)
        
        print("\n\nLevel ::  ",level)
        print("Hueristic value (h)  ",h)
        printMatrix(state)
        
def move(arr,pos,state):
    store_state = state[:]
    store_h = 99999
    for i in range(len(arr)):
        dup_state = state[:]
        temp = dup_state[pos]
        dup_state[pos] = dup_state[arr[i]]
        dup_state[arr[i]] = temp
        temp_h = countMisMatch(dup_state)
        if(temp_h < store_h):
            store_h = temp_h
            store_state = dup_state
    return store_state,store_h


initial_state = [3,7,6,5,1,2,4,0,8]
solvePuzzle(initial_state)