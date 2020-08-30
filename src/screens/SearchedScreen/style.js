import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: #5E239D;

`;
export const Scroll = styled.ScrollView`
    padding: 30px;
`;
export const BigText = styled.Text`
    color: #fff;
    font-size: 18px;
    text-align: left;
`;
export const CommentView = styled.View`
`;
export const ItemView = styled.View`
    margin: 0 0px 40px 0px;
`;
export const Title = styled.Text`
    margin-bottom: 10px;
    font-size: 20px;
    font-weight: bold;
    color: #fff;
`;
export const Row = styled.View`
    flex-direction: row;
    margin-bottom: 15px;
    justify-content: space-between;
`;
export const RowChild = styled.View`
    flex-direction: row;

`;
export const Column = styled.View`
    flex-direction: column;

`;
export const UserImg = styled.Image``;
export const NameText = styled.Text`
    font-size: 16px;
    color: #ccc;
    margin-left: 10px;
`;
export const Date = styled.Text`
    margin-left: 10px;
    color: #aaa;
`;
export const CommentText = styled.Text`
    color: #ccc;
    font-size: 16px;
`;
